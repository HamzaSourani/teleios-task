import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
interface SectionContainerProps {
  title: string;
}
const SectionContainer = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & SectionContainerProps
>(({ children, title, className }, ref) => {
  return (
    <div ref={ref} className={cn(" container", className)}>
      <h2 className="m-4 text-end font-orbitron text-xs uppercase sm:text-sm md:text-lg">
        {title}
      </h2>
      <hr className="mb-8 rounded-full" />

      <>{children}</>
    </div>
  );
});
SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
