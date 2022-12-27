import { useEffect, useState } from "react";
import { REACT_APP_API_KEY } from "./constants";

function useGetData(section, setData, filters = "", deps = []) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    // setTimeout(function () {
    fetch(
      `https://api.themoviedb.org/3${section}?api_key=${REACT_APP_API_KEY}${filters}`
    )
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
    // }, 3000);
  }, deps);

  return { error, loading };
}

export default useGetData;
