import { useCallback, useState } from "react";

export const useFeatch = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);

  const request = useCallback(async (url: string, options: any) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (error: any) {
      json = null;
      setError(error.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json, error };
    }
  }, []);

  return {
    data,
    error,
    loading,
    request,
  };
};
