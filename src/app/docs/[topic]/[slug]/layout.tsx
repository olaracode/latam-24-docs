import React from "react";
import Link from "next/link";
import { Container } from "@/components/mics";
import { FaArrowUp } from "react-icons/fa";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      {/* Go Top FAB */}
      <div className="fixed bottom-10 w-screen">
        <Container>
          <div className="flex justify-end">
            <Link
              href="#breadcrumb"
              className="py-1 px-4 border-2 border-black bg-white  hover:border-b-4 hover:border-r-4"
              scroll={true}
            >
              <span className="flex items-center gap-1 font-bold text-sm">
                Subir <FaArrowUp />
              </span>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default layout;
