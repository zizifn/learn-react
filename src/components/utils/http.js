import { QueryClient } from "@tanstack/react-query";

async function fetchEvents({ signal, searchTerm }) {

    console.log("---fetchEvents-serachs--", searchTerm)
    let url = "http://localhost:3000/events";
    if (searchTerm) {
        url = `${url}?search=${searchTerm}`
    }
    const response = await fetch(url, {
        signal
    });

    if (!response.ok) {
        const error = new Error("An error occurred while fetching the events");
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { events } = await response.json();

    return events;
}

async function fetchEvent({ signal, id }) {

    let url = `http://localhost:3000/events/${id}`;
    const response = await fetch(url, {
        signal
    });

    if (!response.ok) {
        const error = new Error("An error occurred while fetching the events with id");
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { event } = await response.json();

    return event;
}

async function deleteEvent({ id }) {

    let url = `http://localhost:3000/events/${id}`;
    const response = await fetch(url, {
        method: 'DELETE'
    });

    if (!response.ok) {
        const error = new Error("An error occurred while DELETE the events with id");
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const data = await response.json();

    return data;
}


async function createNewEvent(eventData) {

    const resp = await fetch("http://localhost:3000/events", {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: {
            'Content-Type': "application/json"
        }
    });

    if (!resp.ok) {
        const error = new Error("An error occurred while update the events");
        error.code = resp.status;
        error.info = await resp.json();
        throw error;
    }

    const { events } = await resp.json();

    return events;
}

async function fetchImages({ signal }) {
    let url = "http://localhost:3000/events/images";
    const response = await fetch(url, {
        signal
    });

    if (!response.ok) {
        const error = new Error("An error occurred while fetching the iames");
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { images } = await response.json();

    return images;
}

const queryClient = new QueryClient();


export { fetchEvents, fetchEvent, queryClient, deleteEvent, createNewEvent, fetchImages }