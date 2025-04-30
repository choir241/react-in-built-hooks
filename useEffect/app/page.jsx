"use client";
import VideoPlayer from "./components/VideoPlayer";
import { useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");

  return (
    <>
      <input onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
      <button onClick={() => setIsPlaying(!isPlaying)}>Play</button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
