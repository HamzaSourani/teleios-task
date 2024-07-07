import { cn } from "@/lib/utils";
import React, { FC, PropsWithChildren, HTMLAttributes } from "react";

const Container: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn("container", className)}>
      {children}
    </div>
  );
};

export default Container;
