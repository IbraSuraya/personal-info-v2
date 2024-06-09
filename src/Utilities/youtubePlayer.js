"use client";

import { AlertSimple } from "@/components/Alert/AlertSimple";
import { useState } from "react";
import Youtube from "react-youtube";

export default function YoutubePlayer({ youtubeId, title }) {
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const queryString = new URLSearchParams({ search_query: `trailer ${title}` }).toString();

  const option = {
    width: "320",
    height: "180",
  };

  const handleYoutubeError = () => {
    setShowErrorAlert(true);
  };

  return (
    <>
      {showErrorAlert && (
        <div className="fixed bottom-5 right-5">
          <AlertSimple
            type="warning"
            message="Video does not exist."
            url={`https://www.youtube.com/results?${queryString}`}
            textUrl="Click Here"
          />
        </div>
      )}
      <Youtube
        videoId={youtubeId}
        onReady={(event) => event.target.pauseVideo()}
        opts={option}
        onError={handleYoutubeError}
      />
    </>
  );
}
