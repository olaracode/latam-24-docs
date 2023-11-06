import React from "react";
import useEvaluation from "@/hooks/evaluation/useEvaluation";
import Question from "@/components/evaluation/Question";
const Page = ({
  params,
}: {
  params: {
    slug: string;
    steps: string;
  };
}) => {
  const { current } = useEvaluation(params.slug);
  const step = parseInt(params.steps);
  if (!current) return null;
  const currentQuestion = current.questions[step - 1];
  return (
    <div className="grid mt-5 px-5">
      <Question question={currentQuestion} />
    </div>
  );
};

export default Page;
