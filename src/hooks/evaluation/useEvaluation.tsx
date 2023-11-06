import React from "react";
import { getEvaluations } from "./utils";
// inside the public folder i have a folder called evaluations. Inside i have a series of json files which have

const useEvaluation = (slug?: string) => {
  const evaluations = getEvaluations();
  const current =
    slug && evaluations.find((evaluation) => evaluation.slug === slug);

  return { evaluations, current };
};

export default useEvaluation;
