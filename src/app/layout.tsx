import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import configs from "@/config";
import { Navbar, Footer } from "@/components/layout";
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
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-[80vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
