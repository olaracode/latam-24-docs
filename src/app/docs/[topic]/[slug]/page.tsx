import React from "react";
import Container from "@/components/Container";
import useDocs from "@/hooks/useDocs";
import MarkDown from "@/components/MarkDown";
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
  return (
    <Container>
      <div className="my-10">
        {current && <MarkDown content={current?.content} />}
      </div>
    </Container>
  );
};

export default DocDescription;
