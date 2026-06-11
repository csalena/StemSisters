import { useEffect, useState } from "react";

export const useApiResource = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(endpoint, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const payload = await response.json();
        setData(Array.isArray(payload) ? payload : []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Hiba tortent az adatok betoltese kozben.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();

    return () => controller.abort();
  }, [endpoint]);

  return { data, loading, error };
};
