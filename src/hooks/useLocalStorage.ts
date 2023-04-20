// this component's goal is when I referesh the page the cart is not become empty

import { useEffect, useState } from "react";

// this function take 2 parameter - key which is a string that will be used as the key for value in a localStorage and initialValue which can be either a value of type T or a function that return value of type T(T is a generic type parameter that represents a type, we can use any other letter instead of this)
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
