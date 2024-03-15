import { useEffect, useState } from "react";
import { token } from "../config";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
      } catch (err) {}
      const res = await fetch(url, {
        heaers: { Authorization: `Bearer ${token}` },
      });
    };
  }, []);

  return <div>userFetchData</div>;
};

export default useFetchData;
