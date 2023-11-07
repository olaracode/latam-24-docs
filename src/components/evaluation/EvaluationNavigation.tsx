"use client";
import React from "react";
import { EvaluationI } from "@/hooks/evaluation/utils";
import { useRouter } from "next/navigation";
import { useEvaluationStore } from "@/hooks/evaluation/useEvaluationStore";
import useUserEvaluation from "@/hooks/evaluation/useUserEvaluation";
const EvaluationNavigation = ({
  evaluation,
  current,
}: {
  evaluation: EvaluationI;
  current: number;
}) => {
  const { handleEvaluationStart, setAnswer, findLastAnswered } =
    useUserEvaluation(evaluation.slug);
  const setUserEvaluation = useEvaluationStore(
    (state) => state.setUserEvaluation
  );
  const userEvaluation = useEvaluationStore((state) => state.userEvaluation);
  console.log(userEvaluation);
  const selectedOption = useEvaluationStore((state) => state.selectedOption);

  const router = useRouter();
  const questions = evaluation.questions;
  const totalQuestions = questions.length;
  const currentQuestion = current;

  const navigateQuestion = (question?: number) => {
    if (!selectedOption) return;
    setAnswer(currentQuestion, selectedOption);
    if (current === totalQuestions) {
      router.push(`/evaluations/${evaluation.slug}/final`);
      return;
    }
    router.push(`/evaluations/${evaluation.slug}/${question}`);
  };
  return (
    <>
      <div className="grid grid-cols-3 justify-between">
        <div></div>
        <div>
          <div className="flex justify-center gap-1">
            <span className="bold">{currentQuestion}</span>
            <span>/</span>
            <span>{totalQuestions}</span>
          </div>
        </div>
        <div className="flex justify-center">
          {currentQuestion < totalQuestions && (
            <button
              className="btn btn-base"
              disabled={currentQuestion === totalQuestions || !selectedOption}
              onClick={() => navigateQuestion(currentQuestion + 1)}
            >
              Siguiente
            </button>
          )}
          {currentQuestion === totalQuestions && (
            <button
              className="btn btn-primary"
              onClick={() => navigateQuestion()}
            >
              Finalizar
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default EvaluationNavigation;
