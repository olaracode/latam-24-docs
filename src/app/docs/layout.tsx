import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-24">
      <BreadCrumb />
      <main>{children}</main>
    </div>
  );
};

export default layout;
