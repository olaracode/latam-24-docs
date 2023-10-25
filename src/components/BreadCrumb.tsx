"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
const BreadCrumb = () => {
  const pathname = usePathname();

  const path = pathname.split("/").filter((p) => p !== "");
  // create a variable that contains the respective paths, for example path[0] is /docs
  // path[1] is /docs/[topic] and so on
  // then create a link for each path

  return (
    <Container>
      <div className="border-2 border-black p-3 shadow-brutal" id="breadcrumb">
        <ul className="flex">
          <li>
            <Link href={`/`}>
              <span className="text-blue-500 text-sm underline">Inicio</span>

              <span className="mx-2 text-blue-500 text-sm">/</span>
            </Link>
          </li>
          {path.map((p, i) => {
            const link = path.slice(0, i + 1).join("/");
            return (
              <li key={`breadcrumb-${i}-${p}`}>
                <Link href={`/${link}`}>
                  <span className="text-blue-500 text-sm underline">{p}</span>
                  {i !== path.length - 1 && (
                    <span className="mx-2 text-blue-500 text-sm">/</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default BreadCrumb;
