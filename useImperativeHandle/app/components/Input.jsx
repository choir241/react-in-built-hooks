"use client";
import React, { useImperativeHandle, useRef, useState } from "react";

export const Input = React.forwardRef((props, ref) => {
  const [val, setVal] = useState("");
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    blur: () => {
      document.title = val;
      inputRef.current.blur();
    },
  }));

  return (
    <input
      ref={inputRef}
      val={val}
      onChange={(e) => setVal(e.target.value)}
      {...props}
    />
  );
});
