"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselMobileNext,
  CarouselMobilePrevious,
} from "@/components/ui/carousel";
import useBreakpoint from "use-breakpoint";
import SectionContainer from "@/components/ui/sectionContainer";
import { Button } from "@/components/ui/button";
import ExperienceCard from "@/components/items/cards/experience";
import { BREAKPOINTS } from "@/constants";
const EXPERIENCES = [
  {
    imgSrc: "/assets/images/experience-img.png",
    title: "First Timer First Timer First Timer",
    time: "30",
    racingMode: "easy & tack",
    tutorialSupport: true,
    price: "250",
    experiencePageLink: "",
  },
  {
    imgSrc: "/assets/images/experience-img.png",
    title: "First Timer",
    time: "30",
    racingMode: "easy & tack",
    tutorialSupport: true,
    price: "250",
    experiencePageLink: "",
  },
  {
    imgSrc: "/assets/images/experience-img.png",
    title: "First Timer",
    time: "30",
    racingMode: "easy & tack",
    tutorialSupport: true,
    price: "250",
    experiencePageLink: "",
  },
  {
    imgSrc: "/assets/images/experience-img.png",
    title: "First Timer",
    time: "30",
    racingMode: "easy & tack",
    tutorialSupport: true,
    price: "250",
    experiencePageLink: "",
  },
  {
    imgSrc: "/assets/images/experience-img.png",
    title: "First Timer",
    time: "30",
    racingMode: "easy & tack",
    tutorialSupport: true,
    price: "250",
    experiencePageLink: "",
  },
];
const ExperiencesSection = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <SectionContainer title="experiences">
      <Carousel opts={{ loop: breakpoint === "xs" }}>
        <CarouselMobileNext />
        <CarouselMobilePrevious />
        <div className="mb-4  flex flex-col items-center justify-between gap-2 md:mb-10  md:flex-row lg:mb-12">
          <p className="section-header">
            <span className="block">experiences &</span>
            <span>complete controlled</span>
          </p>
          <div>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent className="-ml-4">
          {EXPERIENCES.map((experience, index) => (
            <CarouselItem
              key={index}
              className="basis-full pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <ExperienceCard {...experience} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="my-8 text-center md:my-10 lg:my-12">
        <Button className=" md:w-36 lg:w-40" variant={"outline"}>
          see more
        </Button>
      </div>
    </SectionContainer>
  );
};

export default ExperiencesSection;
