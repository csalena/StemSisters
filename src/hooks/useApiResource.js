import { useEffect, useState } from "react";

const resourceCache = new Map();
const inFlightRequests = new Map();

const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const fetchResource = async (endpoint, apiBufferMs) => {
  if (resourceCache.has(endpoint)) {
    return resourceCache.get(endpoint);
  }

  if (inFlightRequests.has(endpoint)) {
    return inFlightRequests.get(endpoint);
  }

  const request = (async () => {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const payload = await response.json();
    await wait(apiBufferMs);

    const normalized = Array.isArray(payload) ? payload : [];
    resourceCache.set(endpoint, normalized);
    return normalized;
  })();

  inFlightRequests.set(endpoint, request);

  try {
    return await request;
  } finally {
    inFlightRequests.delete(endpoint);
  }
};

export const useApiResource = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiBufferMs = Math.max(
    0,
    Number(import.meta.env.VITE_API_BUFFER_MS ?? 450),
  );

  useEffect(() => {
    let isActive = true;

    const loadData = async () => {
      try {
        setLoading(true);
        setError("");

        const payload = await fetchResource(endpoint, apiBufferMs);
        if (isActive) {
          setData(payload);
        }
      } catch (err) {
        if (isActive) {
          setError("Hiba tortent az adatok betoltese kozben.");
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isActive = false;
    };
  }, [endpoint, apiBufferMs]);

  return { data, loading, error };
};
