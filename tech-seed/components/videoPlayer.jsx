"use client";

import { useRef, useState } from "react";
import { Play, Pause, Maximize2, Minimize2 } from "lucide-react";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (video) {
      const newTime =
        (e.nativeEvent.offsetX / e.target.clientWidth) * video.duration;
      video.currentTime = newTime;
    }
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  document.onfullscreenchange = () => {
    setIsFullScreen(!!document.fullscreenElement);
  };

  return (
    <div
      className={`relative w-full max-w-3xl mx-auto ${isFullScreen ? 'h-screen' : 'h-auto'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full object-cover"
        onClick={togglePlayPause}
      >
        <source
          src="Comment intégrer des Google Fonts _ Google Icons avec NextJS.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {isHovered && (
        <>
          <div
            className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800 cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-green-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2"
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button
            className={`absolute top-4 right-4 bg-white text-black rounded-full p-2 ${isFullScreen ? 'hidden' : 'block'}`}
            onClick={toggleFullScreen}
          >
            <Maximize2 />
          </button>
          <button
            className={`absolute top-4 right-4 bg-white text-black rounded-full p-2 ${isFullScreen ? 'block' : 'hidden'}`}
            onClick={toggleFullScreen}
          >
            <Minimize2 />
          </button>
        </>
      )}
    </div>
  );
}
