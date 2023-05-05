import { useEffect, useState } from "react";

export function UseQuerySwapi(path) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    const resultTimeoutId = setTimeout(async () => {
      const data = await fetch(
        `https://swapi.dev/api/people/?search=${path}`
      ).then((resp) => resp.json());

      if (data.count > 0) {
        setData(data.results);
      } else {
        setError(true);
      }

      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(resultTimeoutId);
  }, [path]);

  return { isLoading, error, data };
}
