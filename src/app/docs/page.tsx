import React from "react";
import Container from "@/components/Container";
import useDocs from "@/hooks/useDocs";
import Link from "next/link";

import { Metadata } from "next";
import configs from "@/config";
const { cohort } = configs;
export const metadata: Metadata = {
  title: `Documentacion ${cohort.name}`,
  description: "Indice de la documentación",
};

const Docs = () => {
  const { topics, docsByTopic } = useDocs();
  return (
    <Container>
      <div className="my-10">
        <h1 className="text-2xl font-bold my-5">Documentación</h1>
        <ul className="grid gap-10">
          {topics.map((topic) => {
            return (
              <li
                className="border-2 border-black p-3 shadow-brutal"
                key={`${topic}-tema`}
              >
                <div className="flex items-center justify-between">
                  <h2 className="uppercase text-xl font-bold">{topic}</h2>
                  <Link
                    href={`/docs/${topic}`}
                    className="text-sm hover:text-blue-500 hover:underline hover:font-bold"
                  >
                    Ver Todos
                  </Link>
                </div>
                <ul className="grid gap-3 mt-3">
                  {docsByTopic[topic].slice(0, 3).map((doc) => {
                    return (
                      <li className="border-b-2 border-black" key={doc.file}>
                        <h3 className="font-bold">{doc.name}</h3>
                        <Link
                          href={`/docs/${topic}/${doc.file.replace(".md", "")}`}
                          className="text-sm text-blue-500 hover:underline hover:font-bold"
                        >
                          Ver más
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Docs;
