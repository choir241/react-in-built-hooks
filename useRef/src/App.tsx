"use client";
import { useRef } from "react";

export default function App() {
  const myInput: React.RefObject<null> = useRef(null);

  function handleClick() {
    myInput.current.focus();
  }

  return (
    <>
      <input ref={myInput} />
      <button onClick={() => handleClick()}>Focus on the input box</button>
    </>
  );
}
