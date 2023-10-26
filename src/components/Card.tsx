import React from "react";

const Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid gap-3 border-2 border-black shadow-brutal p-3">
      {children}
    </div>
  );
};

const Header = ({
  title,
  hType = "h2",
  hSize = "md",
  Side,
}: {
  title: string;
  hType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  hSize?: "sm" | "md" | "lg" | "xl";
  Side?: React.ReactNode;
}) => {
  const Tag = hType;
  return (
    <div className="flex items-center justify-between mb-3">
      <Tag className={`text-${hSize} font-bold uppercase`}>{title}</Tag>
      {Side}
    </div>
  );
};

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <div className={`border-b-2 border-black`}>{children}</div>;
};

const Card = {
  Body,
  Header,
  ListItem,
};

export default Card;
