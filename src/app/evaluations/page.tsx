import React from "react";
import useEvaluation from "@/hooks/evaluation/useEvaluation";
const page = () => {
  const evaluation = useEvaluation();
  return <div>page</div>;
};

export default page;
