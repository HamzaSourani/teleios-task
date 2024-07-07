"use client";
import Atropos from "atropos/react";

import {
  PauseIcon,
  PlayIcon,
  VideoFractionLeft,
  VideoFractionRight,
} from "../svg";
import AppVideoProps from "./type";
import "atropos/css";
import { useRef, useState } from "react";
const AppVideo = ({ src }: AppVideoProps) => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null!);
  const handlePlayPause = () => {
    if (isPlay) {
      videoRef.current.pause();
      setIsPlay(false);
    } else {
      videoRef.current.play();
      setIsPlay(true);
    }
  };
  return (
    <Atropos
      innerClassName="h-[200px] p-4 md:p-8 xl:p-12 2xl:p-14 3xl:p-16   "
      shadow={false}
      activeOffset={0}
      rotateXMax={7}
      rotateYMax={7}
      shadowScale={0}
    >
      <div className=" relative ">
        <video ref={videoRef} className={" aspect-video w-full  object-cover"}>
          <source src={src} type="video/mp4" />
        </video>
        <VideoFractionRight className="  3xl:-right-20 3xl:-top-6 absolute -right-3 -top-3 -z-10 h-1/2  w-2/5 md:-right-7  lg:-right-8 xl:-right-9 2xl:-right-[4.25rem] 2xl:-top-5  " />
        <VideoFractionLeft className=" 3xl:-bottom-9 3xl:-left-28 absolute -bottom-3 -left-6 -z-10 h-1/2  w-2/5 md:-bottom-5 md:-left-9 lg:-bottom-6 lg:-left-12 xl:-left-12 2xl:-bottom-9  2xl:-left-24 " />
        <button
          onClick={handlePlayPause}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary px-3 py-2 md:px-4 md:py-3 lg:px-5"
        >
          {isPlay ? (
            <PauseIcon className="aspect-square w-4 fill-white md:w-5 lg:w-6  xl:w-7" />
          ) : (
            <PlayIcon className="aspect-square w-4 fill-white md:w-5 lg:w-6  xl:w-7" />
          )}
        </button>
      </div>
    </Atropos>
  );
};

export default AppVideo;
