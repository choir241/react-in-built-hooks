"use client";
import { Input } from "./components/Input";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const onBlur = () => {
    ref.current.blur();
  };

  return (
    <main>
      <Input ref={ref} onBlur={onBlur} />
    </main>
  );
}
