import axios from "axios";
import React, { useEffect, useState } from "react";

const useMobile = () => {
  const [loder, setLoder] = useState(true);
  const [mobiles, setMobils] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoder(true);
    axios("/MobilesData.json")
      .then((data) => setMobils(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoder(false));
  }, []);
  return { mobiles, error, loder };
};

export default useMobile;
