import { useEffect } from "react";

export function useGetData() {
  useEffect(() => {
    console.log("Custom hook used");
  }, []);
}
