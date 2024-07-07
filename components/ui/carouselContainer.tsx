import React, { FC, PropsWithChildren } from "react";

const CarouselContainer: FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  return (
    <div>
      <div className="  max-w-screen-3xl m-auto px-10 pt-10 md:px-20  md:pt-16 lg:px-36 lg:pt-20 xl:px-56 2xl:px-80">
        <h2 className="m-4 text-end font-orbitron text-xs uppercase sm:text-sm md:text-lg">
          {title}
        </h2>
        <hr className="mb-8 rounded-full" />
      </div>

      <div className="pb-10 md:pb-16 lg:pb-20">{children}</div>
    </div>
  );
};

export default CarouselContainer;
