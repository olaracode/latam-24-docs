import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[678px] w-[90%] m-auto">{children}</div>;
};

export default Container;
