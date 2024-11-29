import { useState, useEffect } from "react";

const useDebound = (value, delay) => {
  const [deboundValue, setDeboundValue] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDeboundValue(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value]);

  return deboundValue;
};
export default useDebound;
