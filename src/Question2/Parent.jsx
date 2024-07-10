import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
  }

  return (
      <Child count={count} increment={increment} decrement={decrement} />
  );
}
