import { useRef, useState, useEffect, useCallback } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import React from "react";
import { sortPlacesByDistance } from "./loc.js";

const storeIDs = JSON.parse(localStorage.getItem("pickedPlacesIds")) || [];
const storePlces = storeIDs.map(id => AVAILABLE_PLACES.find(palce => palce.id===id));
console.log('-----------', storePlces, storeIDs, AVAILABLE_PLACES)

function App() {
  console.log("------App")
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(storePlces);
  const [sortPlces, setSortPlaces] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false );

  useEffect(() => {
    console.log("------in the app- useEffect");
    navigator.geolocation.getCurrentPosition((position) => {
      const sortPlces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude,
      );
      setSortPlaces(sortPlces);
      console.log(position);
    });
  }, []);

  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      const newPickedPlces = [place, ...prevPickedPlaces];
      return newPickedPlces;
    });
    const storeIDs = JSON.parse(localStorage.getItem("pickedPlacesIds")) || [];
    if(!storeIDs.includes(id)){
      storeIDs.unshift(id)
    }
    localStorage.setItem("pickedPlacesIds", JSON.stringify(storeIDs));

  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current),
    );
    // modal.current.close();
    setModalIsOpen(false);
    const storeIDs = JSON.parse(localStorage.getItem("pickedPlacesIds")) || [];
    const newIDs = storeIDs.filter((id)=> id!== selectedPlace.current);
    localStorage.setItem("pickedPlacesIds", JSON.stringify(newIDs));

  }, []);



  return (
    <>
      <Modal open={modalIsOpen}>
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
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={sortPlces}
          fallbackText={"sorting places by distance...."}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
