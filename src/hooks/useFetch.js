import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const peticion = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: "GET",
      });

      if (!res.ok) throw Error("Error al consumir la api");

      const data = await res.json();
      console.log("data ", data);
      setApi(data);
    } catch (error) {
      setError(error.message);
      setApi([]);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    peticion();
  }, []);

  return { api, loading, error };
};
