import React, { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorMessage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlces, setAvailablePlces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    async function loadPlaces() {
      setIsFetching(true);
      try {
        const placesJSON = await fetchAvailablePlaces(abortController.signal);
        navigator.geolocation.getCurrentPosition((pos) => {
          const sortPlaces = sortPlacesByDistance(
            placesJSON.places,
            pos.coords.latitude,
            pos.coords.longitude,
          );
          setError("");
          setAvailablePlces(sortPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        console.log("error.name", error.name);
        console.log("AvailablePlaces effect---the error is ", error);
        setError(error.message || "faild to load user places");
        setIsFetching(false);
      }
    }
    loadPlaces();

    return () => abortController.abort();
  }, []);

  if (error) {
    return (
      <ErrorMessage
        title={"An error oaccurred!"}
        message={error}
      ></ErrorMessage>
    );
  }

  return (
    <Places
      title="Available Places"
      isLoading={isFetching}
      loadingText="Fetching place data...."
      places={availablePlces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
