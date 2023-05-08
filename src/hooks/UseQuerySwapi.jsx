import { useEffect, useState } from "react";

export function UseQuerySwapi(path, page) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const resultTimeoutId = setTimeout(async () => {
      let dataResult = undefined;
      if (path === "") {
        dataResult = await fetch(
          `https://swapi.dev/api/people/?page=${page}`
        ).then((resp) => resp.json());
      } else {
        dataResult = await fetch(
          `https://swapi.dev/api/people/?search=${path}`
        ).then((resp) => resp.json());
      }

      if (dataResult.count > 0) {
        setData(dataResult.results);
      } else {
        setError(true);
      }

      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(resultTimeoutId);
  }, [path, page]);

  return { isLoading, error, data };
}
