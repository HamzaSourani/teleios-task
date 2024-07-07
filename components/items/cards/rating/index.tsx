import Image from "next/image";
import useBreakpoint from "use-breakpoint";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import StarRating from "@/components/ui/rate";
import { BREAKPOINTS } from "@/constants";
import RatingCardProps from "./type";

const RatingCard = ({ imgSrc, title, rate, description }: RatingCardProps) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <Card className="aspect-square border border-border ">
      <CardHeader>
        <Image
          src={imgSrc}
          alt={title}
          className="aspect-square w-12 rounded-full object-cover xl:w-20"
          width={50}
          height={50}
        />
        <div>
          <p className="md:text-lg xl:text-2xl">{title}</p>
          <StarRating rate={rate} />
        </div>
      </CardHeader>
      <CardContent className="content-text">
        {!(
          breakpoint === "xl" ||
          breakpoint === "2xl" ||
          breakpoint === "3xl"
        ) && description.length > 100
          ? `${description.slice(0, 100)}...`
          : description}
      </CardContent>
    </Card>
  );
};

export default RatingCard;
