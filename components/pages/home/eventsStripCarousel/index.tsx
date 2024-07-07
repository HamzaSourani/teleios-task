"use client";
import Link from "next/link";
import AutoScroll from "embla-carousel-auto-scroll";
import { ArrowRightUpIcon, SmallLogoIcon } from "@/components/items/svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const EVENTS = [
  "CHINESE GP Virtual GP",
  "CHINESE GP Virtual GP",
  "CHINESE GP Virtual GP",
  "CHINESE GP Virtual GP",
  "CHINESE GP Virtual GP",
];
const EventsStripeCarousel = () => {
  return (
    <Carousel
      className=" border-y-2 border-dashed border-primary bg-primary/30"
      plugins={[AutoScroll({ speed: 1 })]}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {EVENTS.map((event, index) => (
          <CarouselItem
            key={index}
            className="flex basis-full  items-center gap-1 text-xs sm:basis-2/3 md:basis-1/2 md:text-base lg:basis-1/4  "
          >
            <Link href={""} className="flex   items-center gap-1 text-xs   ">
              <SmallLogoIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16" />
              <p className="whitespace-nowrap  font-semibold uppercase md:text-base">
                {event}
              </p>
              <div className="content-text">-</div>
              <p className="whitespace-nowrap uppercase">
                reserve your seat now
              </p>
              <ArrowRightUpIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16" />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default EventsStripeCarousel;
