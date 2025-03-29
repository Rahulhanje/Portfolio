'use client';
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react"; // Optional icons

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-20 right-6  p-2 dark:bg-gray-900 bg-slate-100 text-white rounded-full shadow-lg justify-center items-center flex gap-2 w-fit">
      <button onClick={togglePlay}>
        {isPlaying ? <Pause size={28} className="text-gray-900 dark:text-slate-200" /> : <Play size={28} className="text-gray-900 dark:text-slate-200" />}
      </button>
      <audio ref={audioRef} src="/music/background.mp3" loop />
    </div>
  );
}
