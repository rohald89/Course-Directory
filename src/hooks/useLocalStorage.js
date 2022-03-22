import { useEffect, useState } from 'react';

const useLocalStorage = (key, initial = null) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
    }
    return initial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
