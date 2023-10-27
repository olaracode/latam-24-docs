import React from "react";
import { Container } from "@/components/mics";
import useDocs from "@/hooks/md-docs/useDocs";
import { MarkDown } from "@/components/mics";
import { Metadata } from "next";
import configs from "@/config";
const { cohort } = configs;

export const metadata: Metadata = {
  title: `Documentacion ${cohort.name}`,
  description: "Descripción del archivo de documentación",
};

const DocDescription = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { slug } = params;
  const { docs } = useDocs();
  const current = docs.find((doc) => doc.file.replace(".md", "") === slug);
  if (!current) {
    throw new Error("No se ha encontrado el documento solicitado");
  }
  return (
    <Container>
      <div className="my-10">
        {current && <MarkDown content={current?.content} />}
      </div>
    </Container>
  );
};

export default DocDescription;
