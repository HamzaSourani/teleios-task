"use client";
import Image from "next/image";
import Atropos from "atropos/react";
import "atropos/css";
import { AppImageProps } from "./type";
import { cn } from "@/lib/utils";
import Fragment from "../svg";
const AppImage = ({ src, direction = "normal" }: AppImageProps) => {
  return (
    <Atropos
      shadow={false}
      activeOffset={0}
      rotateXMax={7}
      rotateYMax={7}
      shadowScale={0}
      className="  relative "
    >
      <div
        className={cn(
          "absolute h-full top-5 ",
          direction == "normal" ? "left-0" : "right-0"
        )}
      >
        <Fragment className=" fill-primary h-[70%] " />
      </div>
      <div className="w-full h-full">
        <Image
          src={src}
          className={cn(
            " w-full h-full aspect-[4/3] object-cover",
            direction == "normal" ? "image-clip" : "image-clip-revert"
          )}
          width={600}
          height={337}
          alt=""
        />
      </div>
    </Atropos>
  );
};

export default AppImage;
