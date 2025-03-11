import { useEffect, useState } from "react";

function useFetch(fetchFn, initValue) {
    const [data, setData] = useState(initValue);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const abortController = new AbortController();
        async function loadPlaces() {
            setIsFetching(true);
            try {
                const placesJSON = await fetchFn(abortController.signal);
                setError("");
                setData(placesJSON);
                setIsFetching(false);
            }
            catch (error) {
                console.log("error.name", error.name);
                setError(error.message || "faild to load user places");
                setIsFetching(false);
            }
        }
        loadPlaces();

        // return () => abortController.abort();
    }, [fetchFn]);

    return {
        data,
        isFetching,
        error,
        setData
    }
}

export { useFetch }