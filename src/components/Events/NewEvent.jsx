import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { createNewEvent, queryClient } from "../utils/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
  const navigate = useNavigate();

  const { data, isPending, error, mutate, isSuccess } = useMutation({
    mutationKey: ["newEvent"],
    mutationFn: createNewEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
      navigate("../");
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(["events", ""], context);
    },
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["events", ""] });
      const previous = queryClient.getQueryData(["events", ""]);
      queryClient.setQueryData(["events", ""], data);
      return { previous };
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
  });

  // if (isSuccess) {
  //   navigate("../");
  // }

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && <p>submiting</p>}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
        {error && (
          <ErrorBlock
            title={"faild to create event"}
            message={error.info?.message || "faild to create event, try again"}
          ></ErrorBlock>
        )}
      </EventForm>
    </Modal>
  );
}
