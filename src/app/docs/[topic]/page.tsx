import React from "react";
import useDocs from "@/hooks/md-docs/useDocs";
import { Container } from "@/components/mics";
import Link from "next/link";
import Card from "@/components/Card";

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
    <div className="my-10">
      <Container>
        <Card.Body>
          <Card.Header
            title={topic}
            hType="h1"
            Side={<p>{current.length}</p>}
          />
          <ul className="grid gap-3">
            {current.map((doc, i) => {
              return (
                <Card.ListItem key={doc.file}>
                  <h2>{doc.name}</h2>
                  <Link
                    href={`${topic}/${doc.file.replace(".md", "")}`}
                    className="text-sm text-blue-500 hover:underline hover:font-bold"
                  >
                    Ver más
                  </Link>
                </Card.ListItem>
              );
            })}
          </ul>
        </Card.Body>
      </Container>
    </div>
  );
};

export default DocTopic;
