import React from "react";
import useDocs from "@/hooks/useDocs";
import Link from "next/link";
const OwnedDocs = () => {
  const { docs } = useDocs();
  return (
    <div className="border-2 shadow-brutal border-black p-3">
      <h2 className="text-xl font-bold">Documentación interna</h2>
      <div className="grid gap-2 mt-3">
        {docs.map((doc) => {
          return (
            <div className="border-b-2 border-black pb-2">
              <h3 className="text-lg">{doc.name}</h3>
              <p>
                <Link href={`/docs/${doc.file.replace(".md", "")}`}>
                  <span className="text-blue-500 text-sm underline">Leer</span>
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OwnedDocs;
