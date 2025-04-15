import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { fetchEvents } from "../utils/http.js";
import { useQuery } from "@tanstack/react-query";
export default function NewEventsSection() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
    staleTime: 20000,
    // gcTime: 3000,
  });

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  console.log("---------", error);
  if (error) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
