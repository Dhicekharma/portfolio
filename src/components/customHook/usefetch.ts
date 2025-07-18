import { useState, useEffect } from "react";
type UseFetchResult<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
  };
  
  function useFetch<T>(url: string): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
          console.log(data)
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, [url]);
  
    return { data, loading, error };
  }
  export default useFetch