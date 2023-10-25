import React from "react";
import { Container } from "../mics";
import { FaGithub } from "react-icons/fa6";
import configs from "@/config";
import Link from "next/link";

const Footer = () => {
  const { meta } = configs;
  return (
    <footer className="bg-gray-800 text-white">
      <Container>
        <div className="flex flex-col items-center justify-center py-8">
          <div className="flex items-center justify-center space-x-4 text-xl">
            <Link className="underline hover:font-bold" href="/">
              <span>Home</span>
            </Link>
            <Link className="underline hover:font-bold" href="/docs">
              <span>Docs</span>
            </Link>
          </div>
          <hr className="border-white w-full my-5" />

          <div className="text-center">
            <p>Documentación creada usando next.js + Tailwindcss</p>
            <Link
              href={meta.projectRepository}
              className="flex gap-1 items-center justify-center"
            >
              Colabora en github <FaGithub />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
