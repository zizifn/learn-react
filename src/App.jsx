import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import React from "react";
import { updateUserPlaces, fetchUserPlaces } from "./http.js";
import ErrorMessage from "./components/Error.jsx";
function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchUserPlaceError, setfetchUserPlaceError] = useState("");

  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    async function getUserPlace() {
      setIsFetching(true);
      setfetchUserPlaceError("");
      try {
        const userPlaces = await fetchUserPlaces(abortController.signal);
        setfetchUserPlaceError("");
        setUserPlaces(userPlaces.places);
        setIsFetching(false);
      } catch (error) {
        console.log("app effect", error)
        setIsFetching(false);
        setfetchUserPlaceError(error.message || "failed to load user places");
      }
    }

    getUserPlace();
    return () => abortController.abort("abort due effect");
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleError() {
    setError(null);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    try {
      const result = await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setError(error.message);
      setUserPlaces(userPlaces);
    }
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter(
          (place) => place.id !== selectedPlace.current.id,
        ),
      );

      try {
        const requestBody = userPlaces.filter(
          (place) => place.id !== selectedPlace.current.id,
        );
        const result = await updateUserPlaces(requestBody);
      } catch (error) {
        setError(error.message);
        setUserPlaces(userPlaces);
      }

      setModalIsOpen(false);
    },
    [userPlaces],
  );

  return (
    <>
      <Modal open={error} onClose={handleError}>
        <ErrorMessage
          title={"An error occurred"}
          message={error}
          onConfirm={handleError}
        ></ErrorMessage>
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {fetchUserPlaceError && (
          <ErrorMessage
            title={"An error oaccurred"}
            message={fetchUserPlaceError}
          ></ErrorMessage>
        )}
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          isLoading={isFetching}
          loadingText={"loading user places"}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
