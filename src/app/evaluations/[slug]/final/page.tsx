import React from "react";
import EvaluationResults from "@/components/evaluation/EvaluationResults";
const page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  return <EvaluationResults />;
};

export default page;
