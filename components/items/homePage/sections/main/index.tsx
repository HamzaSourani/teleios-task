"use client";
import Image from "next/image";
import AppImage from "../../../appImage";
import { Button } from "@/components/ui/button";

const MainSection = () => {
  return (
    <section className="my-12 flex items-center flex-col gap-10 md:gap-x-16 lg:gap-20">
      <p className="section-header flex gap-2 items-center ">
        <Image
          src={"/assets/images/logo2.png"}
          alt="teleios"
          className="w-20 sm:w-24 md:w-28 lg:w-36"
          width={160}
          height={160}
        />
        <span>teleios dome experience</span>
      </p>
      <div className="grid grid-cols-1 items-center md:[grid-template-columns:2.5fr_2fr] gap-8 md:gap-12 lg:gap-16">
        <AppImage src="/assets/images/main-section.jpg" />
        <div className="flex flex-col  gap-4">
          <p className="section-header">A WORLD FIRST EXPERIENCE</p>
          <hr className="h-1 w-8 bg-white" />
          <p>
            A thrilling F1® racing experience designed to make you feel like a
            champion. F1 Arcade brings all the excitement, glamour and thrills
            of Formula 1® to the UK with our bespoke full-motion racing
            simulators, incredible food & cocktail menus and an electric
            atmosphere creating the perfect social gaming experience.
          </p>
          <Button>find out more</Button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
