import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [state, setState] = useState(false);

  function toggleState() {
    setState((s) => !s);
  }

  return (
    <>
      <p>State: {state ? 'True' : 'False'}</p>
      <Child state={state} toggle={toggleState} />
    </>
  );
}
