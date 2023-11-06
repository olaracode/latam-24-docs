"use client";
import React, { SyntheticEvent } from "react";
import { Question as QuestionT } from "@/hooks/evaluation/utils";
import { BsRecordCircle, BsRecordCircleFill } from "react-icons/bs";
import { useEvaluationStore } from "@/hooks/evaluation/useEvaluationStore";
const Question = ({ question }: { question: QuestionT }) => {
  const selectedOption = useEvaluationStore((state) => state.selectedOption);
  const setSelectedOption = useEvaluationStore(
    (state) => state.setSelectedOption
  );

  return (
    <>
      <div>
        <h3>{question.question}</h3>
      </div>
      <div className="grid gap-5 my-4">
        {question.options.map((option) => (
          <button
            key={option}
            className={
              "btn btn-base flex gap-3 items-center" +
              (selectedOption === option ? " btn-base-active" : "")
            }
            onClick={() => setSelectedOption(option)}
          >
            {selectedOption === option ? (
              <BsRecordCircle className="text-company" />
            ) : (
              <BsRecordCircleFill />
            )}
            <span>{option}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Question;
