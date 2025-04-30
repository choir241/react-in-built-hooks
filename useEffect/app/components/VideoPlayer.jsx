"use client"
import { useRef, useEffect } from "react";

export default function VideoPlayer({src, isPlaying}){

  const ref = useRef(null);

  useEffect(()=>{
    if(isPlaying){
      console.log('calling video play')
      ref.current.play()
    }else{
      console.log('calling video pause')
      ref.current.pause()
    }
  },[isPlaying]);


  return <video ref={ref} src={src} loop playsInline/>;
}