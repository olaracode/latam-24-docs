import React from "react";
import EvaluationResults from "@/components/evaluation/EvaluationResults";
const Page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  return <EvaluationResults slug={params.slug} />;
};

export default Page;
