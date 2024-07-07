import { Card, CardContent, CardFooter, CardImage } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RacingModeIcon, VideoIcon, TimerIcon } from "../../svg";
import ExperienceCardProps from "./type";

const ExperienceCard = ({
  imgSrc,
  title,
  time,
  racingMode,
  tutorialSupport,
  price,
  experiencePageLink,
}: ExperienceCardProps) => {
  return (
    <Card className="text-foreground">
      <CardImage src={imgSrc} alt={title} />
      <CardContent className="flex flex-col gap-2 pt-4 md:gap-3 md:pt-6">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold md:text-lg lg:text-xl ">
          {title}
        </p>
        <div className="content-text flex justify-between gap-3">
          <div className="flex items-center  gap-1">
            <TimerIcon className="h-4 w-4" />
            <p className="capitalize">{`${time} min`}</p>
          </div>
          <div className="flex items-center  gap-1">
            <RacingModeIcon className="h-4 w-4" />
            <p className="capitalize">{racingMode}</p>
          </div>
        </div>
        {tutorialSupport && (
          <div className="flex items-center gap-1">
            <VideoIcon className="h-4 w-4" />
            <p className="text-xs capitalize md:text-base">video tutorials</p>
          </div>
        )}
        <div className="flex items-center justify-between">
          <p className="uppercase">price</p>
          <p>
            {price}
            <span className="pl-1 uppercase text-primary">aed</span>
          </p>
        </div>
      </CardContent>
      <CardFooter className="pb-4 md:pb-6">
        <Button className="w-full">book now</Button>
      </CardFooter>
    </Card>
  );
};

export default ExperienceCard;
