"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigateButtons,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
const CAROUSEL_ITEMS = [
  {
    imgSrc: "/assets/images/dome.png",
    title: "dome",
    description:
      "Teleios Dome is more than just a racing facility; it's an immersive entertainment destination. Our venue features state-of-the-art racing simulators, a stylish lounge, VIP area, conference space, and a gaming area. Whether you're here for exhilarating races or social gatherings, Teleios Dome offers an unforgettable experience.",
    findMore: "",
  },
  {
    imgSrc: "/assets/images/dome.png",
    title: "dome",
    description:
      "Teleios Dome is more than just a racing facility; it's an immersive entertainment destination. Our venue features state-of-the-art racing simulators, a stylish lounge, VIP area, conference space, and a gaming area. Whether you're here for exhilarating races or social gatherings, Teleios Dome offers an unforgettable experience.",
    findMore: "",
  },
  {
    imgSrc: "/assets/images/dome.png",
    title: "dome",
    description:
      "Teleios Dome is more than just a racing facility; it's an immersive entertainment destination. Our venue features state-of-the-art racing simulators, a stylish lounge, VIP area, conference space, and a gaming area. Whether you're here for exhilarating races or social gatherings, Teleios Dome offers an unforgettable experience.",
    findMore: "",
  },
  {
    imgSrc: "/assets/images/dome.png",
    title: "dome",
    description:
      "Teleios Dome is more than just a racing facility; it's an immersive entertainment destination. Our venue features state-of-the-art racing simulators, a stylish lounge, VIP area, conference space, and a gaming area. Whether you're here for exhilarating races or social gatherings, Teleios Dome offers an unforgettable experience.",
    findMore: "",
  },
];
const DomeCarousel = () => {
  return (
    <section>
      <Carousel plugins={[Autoplay({ delay: 5000 })]} opts={{ loop: true }}>
        <CarouselContent>
          {CAROUSEL_ITEMS.map((item, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="relative">
                <Image
                  className="h-[50vh] w-full object-cover lg:h-[85vh]"
                  src={item.imgSrc}
                  alt={item.title}
                  width={1200}
                  height={900}
                />
                <div className="absolute bottom-32 m-auto  flex w-full max-w-screen-3xl flex-col gap-4 px-10  md:px-20  lg:px-36  xl:px-56 2xl:px-80">
                  <p className="section-header">{item.title}</p>
                  <p className="content-text">{item.description}</p>
                  <Button className="self-start md:w-40">find out more</Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="relative ">
          <CarouselNavigateButtons />
        </div>
      </Carousel>
    </section>
  );
};

export default DomeCarousel;
