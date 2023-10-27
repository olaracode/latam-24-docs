import React from "react";
import Link from "next/link";

type tailwindSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

const baseClass = (size: tailwindSize) =>
  `text-${size} hover:text-blue-500 hover:underline hover:font-bold`;

const CustomLink = ({
  to,
  content,
  size = "sm",
}: {
  to: string;
  content: string;
  size?: tailwindSize;
}) => {
  return (
    <Link href={to} className={baseClass(size)} scroll={true}>
      {content}
    </Link>
  );
};

export default CustomLink;
