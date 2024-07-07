"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useBreakpoint from "use-breakpoint";
import CarouselContainer from "@/components/ui/carouselContainer";
import { Button } from "@/components/ui/button";
import { BREAKPOINTS } from "@/constants";
import RatingCard from "@/components/items/cards/rating";
const TESTIMONIAL = [
  {
    imgSrc: "/assets/images/event.png",
    title: "hamza sourani",
    rate: 4.5,
    description:
      "Corporate milestones to personal Dome is your premier Corporate milestones to personal Dome is your premier",
  },
  {
    imgSrc: "/assets/images/event.png",
    title: "hamza sourani",
    rate: 3.5,
    description:
      "Corporate milestones to personal Dome is your premier Corporate milestones to personal Dome is your premier",
  },
  {
    imgSrc: "/assets/images/event.png",
    title: "hamza sourani",
    rate: 5,
    description:
      "Corporate milestones to personal Dome is your premier Corporate milestones to personal Dome is your premier",
  },
  {
    imgSrc: "/assets/images/event.png",
    title: "hamza sourani",
    rate: 3,
    description:
      "Corporate milestones to personal Dome is your premier Corporate milestones to personal Dome is your premier",
  },
  {
    imgSrc: "/assets/images/event.png",
    title: "hamza sourani",
    rate: 4.5,
    description:
      "Corporate milestones to personal Dome is your premier Corporate milestones to personal Dome is your premier",
  },
];

const Stores = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <section>
      <CarouselContainer title="stores">
        <Carousel opts={{ loop: breakpoint === "xs" }}>
          <div className="m-auto max-w-screen-3xl px-10  md:px-20 lg:px-36 xl:px-56 2xl:px-80">
            <div className="mb-4  flex flex-col items-center justify-between gap-2 md:mb-10  md:flex-row lg:mb-12">
              <p className="section-header">our happy customers</p>
              <div>
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </div>
          </div>
          <div className="max-w-screen-3xl md:pl-20  lg:pl-36  xl:pl-56 2xl:pl-80">
            <CarouselContent className=" m-auto -ml-4 ">
              {TESTIMONIAL.map((event, index) => (
                <CarouselItem
                  key={index}
                  className="basis-2/3 pl-4 sm:basis-3/5 md:basis-1/3 lg:basis-[30%] 2xl:basis-[22%]"
                >
                  <RatingCard {...event} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
        <div className="my-8 text-center md:my-10 lg:my-12">
          <Button className=" md:w-36 lg:w-40" variant={"outline"}>
            see more
          </Button>
        </div>
      </CarouselContainer>
    </section>
  );
};

export default Stores;
