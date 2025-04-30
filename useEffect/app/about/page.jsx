"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoPlayer from "../components/VideoPlayer";

export default function About() {
  const [ingredients, setIngredients] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    let ignore = false;
    setIngredients([]);
    async function getIngredients() {
      if (!ignore) {
        const response = await axios.get("http://localhost:8000/ingredients");
        setIngredients(response.data);
      }
    }

    getIngredients();

    return () => {
      ignore = true;
    };
  }, []);


  {console.log(ingredients)}
  return <>About
     <input onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
      <button onClick={() => setIsPlaying(!isPlaying)}>Play</button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
  </>;
}
