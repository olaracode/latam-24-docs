"use client";
import React from "react";
import useUserEvaluation from "@/hooks/evaluation/useUserEvaluation";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
const EvaluationResults = ({ slug }: { slug: string }) => {
  const { userEvaluation, getUserPoints } = useUserEvaluation(slug);
  const points = getUserPoints();
  const approved =
    points && userEvaluation && points / userEvaluation?.questions.length > 0.6;
  return (
    <div className="grid gap-5">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">
          Resultados: {points}/{userEvaluation?.questions.length}
        </h1>
        {approved ? (
          <AiOutlineCheckCircle className="text-blue-500" />
        ) : (
          <ImCancelCircle className="text-red-500" />
        )}
      </div>
      {userEvaluation &&
        userEvaluation.questions.map((question) => (
          <div
            className={`p-3 border border-l-4 grid gap-2 ${
              question.correct ? "border-green-500" : "border-red-500"
            }`}
            key={question.id}
          >
            <h2>
              Pregunta: <span className="font-bold">{question.question}</span>
            </h2>
            <p>
              Respuesta: <span className="font-bold">{question.selected}</span>
            </p>
            <p>
              Correcta: <span className="font-bold">{question.answer}</span>
            </p>
            <div>
              <p className="font-bold">Explicación:</p>
              <p>{question.explanation}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EvaluationResults;
