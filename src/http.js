async function fetchAvailablePlaces(signal) {
    const palcesRes = await fetch("http://localhost:3000/places", {
        signal,
    });
    if (!palcesRes.ok) {
        throw new Error("fail loading places data");
    }
    const placesJSON = await palcesRes.json();

    return placesJSON
}

async function fetchUserPlaces(signal) {
    const palcesRes = await fetch("http://localhost:3000/user-places", {
        signal,
    });
    if (!palcesRes.ok) {
        throw new Error("fail loading user places data");
    }
    const placesJSON = await palcesRes.json();

    return placesJSON
}


async function updateUserPlaces(places) {
    const palcesRes = await fetch("http://localhost:3000/user-places", {
        method: "PUT",
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': "application/json"
        }
    });
    if (!palcesRes.ok) {
        throw new Error("fail update User Places");
    }
    const placesJSON = await palcesRes.json();

    return placesJSON
}

export { fetchAvailablePlaces, updateUserPlaces, fetchUserPlaces }