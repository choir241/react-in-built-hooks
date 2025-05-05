"use client";
import { useId } from "react";

export default function Home() {
  
  const passwordHint = useId();

  return (
    <>
      <input type = "text" aria-labelledby= {passwordHint}/>
      <p id =  {passwordHint}>This is a password hint!</p>
    </>
  );
}
