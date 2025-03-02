import { useEffect } from "react";
import { useState } from "react";

export function useGetData() {
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    fetch("/stocks.json")
      .then((res) => {
        if (res.ok) {
          setError(null);
          return res.json();
        }

        throw new Error("Something went wrong...");
      })
      .then((res) => {
        if (isCancelled) {
          return;
        }
        setStocks(res);
      })
      .catch((e) => {
        setError(e);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return { stocks, error };
}
