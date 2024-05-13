"use client";
import Image from "next/image";
import Atropos from "atropos/react";
import "atropos/css";
import { AppImageProps } from "./type";
const AppImage = ({ src }: AppImageProps) => {
  return (
    <Atropos
      shadow={false}
      activeOffset={0}
      rotateXMax={7}
      rotateYMax={7}
      shadowScale={0}
      className="  relative w-[700px] h-[525px]"
    >
      <div className="absolute h-full top-5 left-0">
        <svg
          className=" fill-primary h-[70%] "
          viewBox="0 0 259 377"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-atropos-offset="-5"
        >
          <g>
            <path d="M0.875 11.2679L258.875 0V316.841L0.875 377L0.875 11.2679Z"></path>
          </g>
        </svg>
      </div>
      <div className="w-full h-full">
        <Image
          src={src}
          className="image-clip w-full h-full object-cover"
          width={600}
          height={337}
          alt=""
        />
      </div>
    </Atropos>
  );
};

export default AppImage;
