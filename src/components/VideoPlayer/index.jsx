"use client";

import YoutubePlayer from "@/Utilities/youtubePlayer";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CiYoutube } from "react-icons/ci";
import { useState } from "react";
import { AlertSimple } from "../Alert/AlertSimple";

export default function VideoPlayer({ youtubeId, title }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-4 right-4">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-secondary mb-1"
        >
          <XMarkIcon
            className="h-7 w-7 bg-gray-400 text-gray-100 rounded-2xl p-1"
            aria-hidden="true"
          />
        </button>
        <YoutubePlayer youtubeId={youtubeId} title={title} />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-5 right-5 transition-all shadow-xl text-white bg-[#FF0000] hover:bg-[#FF0000]/75 focus:ring-4 focus:outline-none focus:ring-[#FF0000]/50 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-[#FF0000]/55 me-2 mb-2"
      >
        <CiYoutube className="mr-2 text-xl" />
        Watch Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
}
