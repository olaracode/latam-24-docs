import React from "react";
import useEvaluation from "@/hooks/evaluation/useEvaluation";
import EvaluationStart from "@/components/evaluation/EvaluationStart";
const Page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { current } = useEvaluation(params.slug);
  if (!current) return null;
  return (
    <div>
      <h2 className="font-bold mb-5">Introducción:</h2>
      <p>{current.description}</p>
      <EvaluationStart slug={params.slug} evaluation={current} />
    </div>
  );
};

export default Page;
