import React from "react";
import useDocs from "@/hooks/md-docs/useDocs";
import Link from "next/link";
const OwnedDocs = () => {
  const { docs } = useDocs();
  return (
    <div className="border-2 shadow-brutal border-black p-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Documentación interna</h2>
        <Link href="/docs">
          <span className="text-blue-500 text-sm underline">Ver todos</span>
        </Link>
      </div>
      <div className="grid gap-2 mt-3">
        {docs.splice(0, 4).map((doc) => {
          return (
            <div className="border-b-2 border-black pb-2" key={doc.file}>
              <h3 className="text-lg">{doc.name}</h3>
              <p>
                <Link
                  href={`/docs/${doc.topic}/${doc.file.replace(".md", "")}`}
                >
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
