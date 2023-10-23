import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
const inter = Inter({ subsets: ["latin"] });
import configs from "@/config";
import Image from "next/image";
const { cohort } = configs;
export const metadata: Metadata = {
  title: `Documentacion ${cohort.name}`,
  description: "Documentación creada con next.13 y tailwindcss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-screen py-5 border-b-2 border-black shadow-lg bg-white">
          <Container>
            <div>
              <Link
                href="/"
                className="flex gap-1 items-center text-lg hover:font-bold hover:underline"
              >
                <Image
                  src="/assets/rigo.png"
                  alt="Rigo"
                  width={30}
                  height={30}
                />

                <span>Docs</span>
              </Link>
            </div>
          </Container>
        </nav>
        {children}
        {/* <footer className=""></footer> */}
      </body>
    </html>
  );
}
