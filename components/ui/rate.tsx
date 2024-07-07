import React, { HTMLAttributes } from "react";
import { StarFillIcon, StarHalfIcon, StarIcon } from "../items/svg";
import { cn } from "@/lib/utils";
interface StarRateProps {
  rate: number;
}

const StarRating = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & StarRateProps
>(({ rate, className, ...props }, ref) => {
  const stars = [];
  const totalStars = 5;

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rate) {
      stars.push(
        <StarFillIcon
          key={i}
          className="aspect-square w-3 fill-yellow-500 md:w-4 xl:w-5"
        />,
      );
    } else if (i === Math.ceil(rate) && !Number.isInteger(rate)) {
      stars.push(
        <StarHalfIcon
          key={i}
          className="aspect-square w-3 fill-yellow-500 md:w-4 xl:w-5"
        />,
      );
    } else {
      stars.push(
        <StarIcon
          key={i}
          className="aspect-square w-3 fill-yellow-500 md:w-4 xl:w-5"
        />,
      );
    }
  }

  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      <div className="flex  items-center gap-1">{stars}</div>
      <p>{rate}</p>
    </div>
  );
});

StarRating.displayName = "StarRating";
export default StarRating;
