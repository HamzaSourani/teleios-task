import React, { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className="px-10 sm:px-20 md:px-44 lg:px-96">{children}</div>;
};

export default Container;
