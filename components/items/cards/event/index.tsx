import { format } from "date-fns";
import { Card, CardContent, CardImage } from "@/components/ui/card";
import { CalenderIcon } from "../../svg";
import EventCardProps from "./type";
const EventCard = ({ imgSrc, title, date, description }: EventCardProps) => {
  return (
    <Card className="relative text-foreground ">
      <CardImage
        className="aspect-[11/12] md:aspect-[11/12]"
        src={imgSrc}
        alt={title}
      />
      <CardContent className="absolute bottom-0 flex flex-col gap-1 pt-6 md:gap-3">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold uppercase md:text-lg lg:text-xl ">
          {title}
        </p>

        <div className="flex items-center  gap-1">
          <CalenderIcon className="h-4 w-4" />
          <p className="capitalize">{format(date, "dd MMMM yyyy")}</p>
        </div>
        <p className="content-text">
          {description.length > 50
            ? `${description.slice(0, 100)}...`
            : description}
        </p>
      </CardContent>
    </Card>
  );
};

export default EventCard;
