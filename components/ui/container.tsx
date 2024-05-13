import { cn } from "@/lib/utils";
import React, { FC, PropsWithChildren, HTMLAttributes } from "react";

const Container: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn("px-10 sm:px-20 md:px-28 lg:px-52", className)}
    >
      {children}
    </div>
  );
};

export default Container;
