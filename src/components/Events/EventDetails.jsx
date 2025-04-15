import React, { useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import Header from "../Header.jsx";
import { fetchEvent, deleteEvent, queryClient } from "../utils/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isDelete, setIsDelete] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id", id);
  const { data, isPending, error, isSuccess } = useQuery({
    queryKey: ["events", { id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    enabled: !!id,
  });

  const { mutate, isPending: isDeletePending } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("../");
    },
  });

  function deleteEventclick() {
    if (id) {
      mutate({ id });
    }
  }

  function cancelDelete() {
    setIsDelete(false);
  }
  function showDelete() {
    setIsDelete(true);
  }

  console.log("isSuccess", isSuccess);
  return (
    <>
      {isDelete && (
        <Modal onClose={cancelDelete}>
          are you sure you want delete?
          <button onClick={cancelDelete}>cancel</button>
          <button onClick={deleteEventclick}>confirm</button>
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isPending && <p>loading....</p>}
      {error && (
        <ErrorBlock
          title={"faild to create event"}
          message={error.info?.message || "faild to create event, try again"}
        ></ErrorBlock>
      )}
      {isSuccess && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={showDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt="" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time
                  dateTime={`${data.date}T${data.time}`}
                >{`${data.date}T${data.time}`}</time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
