import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";

type ProjectProps = {
  desktopVideo: string;
  tabsState: boolean[];
  setTabsState: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const WindowProjectVideo = ({
  desktopVideo,
  tabsState,
  setTabsState,
}: ProjectProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

const handlePlaying = () => {
  if (videoRef.current) {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }
};

  return (
    <>
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className={`tab ${
          tabsState[1] ? "rounded-box bg-base-100" : "my-1"
        } text-base italic tracking-wider text-secondary`}
        aria-label="Video"
        checked={tabsState[1]}
        onChange={() => setTabsState([false, true, false, false])}
      />
      <div
        role="tabpanel"
        className="group tab-content relative h-fit overflow-hidden border-base-200 bg-base-100"
      >
        <video
          ref={videoRef}
          src={desktopVideo}
          className={`${!isPlaying ? "scale-125 saturate-50" : desktopVideo.includes('rick') ? 'scale-105' : 'scale-100'} w-full duration-500`}
          muted
          loop
        ></video>

        <button
          onClick={handlePlaying}
          className="cursor-custom-pointer absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent p-8 text-6xl text-secondary opacity-0 duration-200 group-hover:opacity-50 group-hover:hover:opacity-100"
        >
          {isPlaying ? (
            <FaPause className="pointer-events-none" />
          ) : (
            <FaPlay className="pointer-events-none" />
          )}
        </button>
      </div>
    </>
  );
};
export default WindowProjectVideo;
