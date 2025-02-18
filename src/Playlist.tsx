import { useState, useRef } from "react";

export interface Media {
  url: string;
  type: string;
}

export interface PlaylistProps {
  playlist: Media[];
}

export default function Playlist({ playlist }: PlaylistProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentVideo = useRef<HTMLVideoElement>(null);
  const currentItem = playlist[currentIndex];

  const nextIndex = (currentIndex + 1) % playlist.length;
  const nextVideo = useRef<HTMLVideoElement>(null);
  const nextItem = playlist[nextIndex];

  // Periodically make sure video is playing.
  // const previousProgress = useRef(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!currentVideo.current) {
  //       return;
  //     }

  //     if (currentVideo.current.currentTime === previousProgress.current) {
  //       console.info("Video stalled, restarting");
  //       currentVideo.current.play();
  //     }

  //     previousProgress.current = currentVideo.current.currentTime;
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  function handleCurrentEnded() {
    setCurrentIndex(nextIndex);
    nextVideo.current?.play();
  }

  return (
    <div className="w-full h-full relative">
      <video
        key={currentIndex}
        className="absolute w-full h-full object-cover z-10"
        ref={currentVideo}
        muted
        autoPlay
        onEnded={handleCurrentEnded}
        onCanPlayThrough={() => {
          console.log("Can play through current video");
        }}
      >
        <source src={currentItem.url} type={currentItem.type} />
      </video>

      <video
        key={nextIndex}
        className="abszolute w-full h-full object-cover z-0"
        ref={nextVideo}
        muted
        preload="auto"
        onCanPlayThrough={() => {
          console.log("Can play through next video");
        }}
      >
        <source src={nextItem.url} type={nextItem.type} />
      </video>
    </div>
  );
}
