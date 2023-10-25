import React from "react";
import Image from "next/image";
import Link from "next/link";
const NotFound = ({ msg, to = "/" }: { msg: string; to: string }) => {
  return (
    <div className="p-5 border-black border-2 shadow-brutal w-full text-center">
      <h2 className="font-bold text-lg">{msg}</h2>
      <div className="flex items-center justify-center my-5">
        <Image
          src="/assets/art/404.png"
          width={400}
          height={200}
          alt="error-illustration"
        />
      </div>
      <Link
        href={to}
        className="p-3 border rounded-sm bg-gray-800 text-white hover:shadow-brutal"
      >
        Volver a la página anterior
      </Link>
    </div>
  );
};

export default NotFound;
