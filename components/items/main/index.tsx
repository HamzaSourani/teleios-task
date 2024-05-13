"use client";
import Image from "next/image";
import AppImage from "../appImage";
const MainSection = () => {
  return (
    <section className="my-12 flex items-center flex-col gap-10 md:gap-x-16 lg:gap-20">
      <p className="section-header flex gap-2 items-center ">
        <Image
          src={"/assets/images/logo2.png"}
          alt="teleios"
          className="w-20 sm:24 md:28 lg:32"
          width={160}
          height={160}
        />
        teleios dome experience
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AppImage src="/assets/images/main-section.jpg" />
        {
          //appImage
        }{" "}
      </div>
    </section>
  );
};

export default MainSection;
