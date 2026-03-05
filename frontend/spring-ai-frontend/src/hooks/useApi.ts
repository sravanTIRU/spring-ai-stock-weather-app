import { useState } from "react";

function useApi<T>() {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = async (apiCall: () => Promise<{ data: T }>) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiCall();
      setData(response.data);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, execute };
}

export default useApi;
