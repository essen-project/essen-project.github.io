import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  isPending: boolean;
  error: string | null;
}

const useFetch = <T>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw new Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Fetch aborted');
          } else {
            // Auto catches network / connection error
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    // Abort the fetch
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
