import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div className="my-12 flex items-center flex-col gap-10 md:gap-x-16 lg:gap-20">
      <h1 className="flex gap-2 items-center uppercase font-syncopate  font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
        <Image
          src={"/assets/images/logo2.png"}
          alt="teleios"
          className="w-20 sm:24 md:28 lg:32"
          width={160}
          height={160}
        />
        teleios dome experience
      </h1>
      <p className="text-justify md:text-center text-sm md:text-lg lg:text-xl">
        You eat, you drink, you race, you earn. From Rookie to Elite, you can
        choose your skill level, meaning that even the absolute beginner can go
        wheel to wheel with a seasoned pro. Whatever the occasion, we have a
        race mode for you. Get your group, grab a cocktail, jump in the
        driver&apos;s seat & experience the thrill of social gaming. Are you
        ready to get in the fast lane?
      </p>
    </div>
  );
};

export default Experience;
