import React from "react";
import Container from "@/components/Container";
import useDocs from "@/hooks/useDocs";
import MarkDown from "@/components/MarkDown";

const page = ({
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
      <div className="my-24">
        {current && <MarkDown content={current?.content} />}
      </div>
    </Container>
  );
};

export default page;
