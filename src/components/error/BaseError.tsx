import React from "react";
import Image from "next/image";
import configs from "@/config";
const BaseError = ({ reset }: { reset: () => void }) => {
  const { meta } = configs;
  return (
    <div className="p-5 border-black border-2 shadow-brutal w-full text-center">
      <h2 className="font-bold text-lg">
        Ha ocurrido un error cargando esta pagina
      </h2>
      <div className="my-3">
        <p>
          Lamentamos el inconveniente!, si el problema sigue presente por favor
          comunicarse con:
        </p>
        <p className="font-bold">{meta.contactEmail}</p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/assets/art/error.png"
          width={400}
          height={200}
          alt="error-illustration"
        />
      </div>
      <button
        onClick={reset}
        className="p-3 border rounded-sm bg-gray-800 text-white hover:shadow-brutal"
      >
        Volver a la página anterior
      </button>
    </div>
  );
};

export default BaseError;
