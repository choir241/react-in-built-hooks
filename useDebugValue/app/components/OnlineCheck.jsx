"use client";
import { useDebugValue, useState } from "react";

export function onlineCheck() {
  const [isOnline, setIsOnline] = useState(false);

  // const [isOnline, setIsOnline] = useState(new Date());

  // useDebugValue(isOnline, ()=>isOnline.toDateString());
  useDebugValue(isOnline ? "online" : "offline");

  return (
    <main>
      <h1>{isOnline ? "online" : "offline"}</h1>
      <button onClick={() => setIsOnline(!isOnline)}>
        Change to {isOnline ? "offline" : "online"}
      </button>
    </main>
  );
}
