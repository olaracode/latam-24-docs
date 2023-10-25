import React from "react";
import { Container } from "../mics";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-screen py-5 border-b-2 border-black shadow-lg bg-white">
      <Container>
        <div>
          <Link
            href="/"
            className="flex gap-1 items-center text-lg hover:font-bold hover:underline"
          >
            <Image src="/assets/rigo.png" alt="Rigo" width={30} height={30} />

            <span>Docs</span>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
