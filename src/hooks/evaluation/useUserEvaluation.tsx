"use client";
import React from "react";
import { useEvaluationStore } from "./useEvaluationStore";
import { EvaluationI } from "./utils";
import { useRouter } from "next/navigation";

const useUserEvaluation = () => {
  const router = useRouter();
  const { userEvaluation, setUserEvaluation, clearSelectedOption } =
    useEvaluationStore();

  const handleEvaluationStart = (evaluation: EvaluationI) => {
    setUserEvaluation(evaluation);
    localStorage.setItem("userEvaluation", JSON.stringify(evaluation));
  };

  const setAnswer = (question: number, answer: string) => {
    if (!userEvaluation) return;
    const newEvaluation = { ...userEvaluation };
    newEvaluation.questions[question - 1].selected = answer;
    newEvaluation.questions[question - 1].correct =
      answer === newEvaluation.questions[question - 1].answer;
    setUserEvaluation(newEvaluation);
    clearSelectedOption();
    localStorage.setItem("userEvaluation", JSON.stringify(newEvaluation));
  };

  const findLastAnswered = (evaluation: EvaluationI) => {
    const lastAnswered = evaluation.questions.find(
      (question) => !question.selected
    );
    const isFinal = evaluation.questions.every((question) => question.selected);
    if (isFinal) return router.push(`/evaluations/${evaluation.slug}/final`);
    if (!lastAnswered) return router.push(`/evaluations/${evaluation.slug}`);
    router.push(`/evaluations/${evaluation.slug}/${lastAnswered?.id}`);
    return lastAnswered;
  };

  const getUserPoints = () => {
    if (!userEvaluation) return;
    const correctAnswers = userEvaluation.questions.filter(
      (question) => question.correct
    );
    return correctAnswers.length;
  };

  React.useEffect(() => {
    let userEvaluation = localStorage.getItem("userEvaluation");
    if (!userEvaluation) return;
    console.log(JSON.parse(userEvaluation));
    const parsed: EvaluationI = JSON.parse(userEvaluation);
    if (parsed) {
      if (!parsed) return;
      console.log(parsed);
      setUserEvaluation(parsed);
      const lastAnswered = findLastAnswered(parsed);
      // if(!lastAnswered) router.push(`/evaluations/${userEvaluation.slug}/1`)
    }
  }, []);
  return {
    handleEvaluationStart,
    setAnswer,
    findLastAnswered,
    userEvaluation,
    getUserPoints,
  };
};

export default useUserEvaluation;
