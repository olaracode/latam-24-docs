import React from "react";
import useDocs from "@/hooks/md-docs/useDocs";
import Link from "next/link";
import Card from "@/components/Card";
import CustomLink from "@/components/CustomLink";

const OwnedDocs = () => {
  const { docs } = useDocs();
  return (
    <Card.Body>
      <Card.Header
        title="Documentación Interna"
        hType="h2"
        Side={<CustomLink to="/docs" content="Ver Todos" />}
      />
      <ul className="grid gap-2">
        {docs.splice(0, 4).map((doc) => {
          return (
            <Card.ListItem key={doc.file}>
              <h3 className="text-lg">{doc.name}</h3>
              <CustomLink
                to={`/docs/${doc.topic}/${doc.file.replace(".md", "")}`}
                content="Leer"
              />
            </Card.ListItem>
          );
        })}
      </ul>
    </Card.Body>
  );
};

export default OwnedDocs;
