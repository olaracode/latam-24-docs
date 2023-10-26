import React from "react";
import useDocs from "@/hooks/md-docs/useDocs";
import { Container } from "@/components/mics";
import Link from "next/link";
import { Metadata } from "next";
import configs from "@/config";
const { cohort } = configs;

export const metadata: Metadata = {
  title: `Docs/Tema`,
  description: "Indice de documentos relevantes al tema",
};

const TagList = ({ tags }: { tags: string[] }) => {
  <ul className="flex flex-wrap gap-2">
    <li>
      {tags.map((tag) => (
        <Link key={tag} href={`/docs/tags/${tag}`}>
          <span className="text-sm text-blue-500 hover:underline">{tag}</span>
        </Link>
      ))}
    </li>
  </ul>;
};
const DocTopic = ({
  params,
}: {
  params: {
    topic: string;
  };
}) => {
  const { topic } = params;
  const { docsByTopic } = useDocs();
  const current = docsByTopic[topic];
  if (!current) {
    throw new Error("No se ha encontrado el tema solicitado");
  }
  return (
    <Container>
      <div className="my-10 grid gap-3 border-2 border-black shadow-brutal p-3">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-2xl font-bold uppercase">{topic}</h1>
          <p>{current.length}</p>
        </div>
        {current.map((doc, i) => {
          return (
            <div key={doc.file} className={` border-b-2 border-black`}>
              <h2>{doc.name}</h2>
              <Link
                href={`${topic}/${doc.file.replace(".md", "")}`}
                className="text-sm text-blue-500 hover:underline hover:font-bold"
              >
                Ver más
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default DocTopic;
