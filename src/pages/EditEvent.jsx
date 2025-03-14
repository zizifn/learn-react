import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";
import React from "react";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventForm method="patch" event={data.event} />;
}

export default EditEventPage;
