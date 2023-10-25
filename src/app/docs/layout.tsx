import React from "react";
import { BreadCrumb } from "@/components/mics";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-24">
      <BreadCrumb />
      <main>{children}</main>
    </div>
  );
};

export default layout;
