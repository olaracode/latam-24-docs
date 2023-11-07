"use client";
import React, { SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import { useEvaluationStore } from "@/hooks/evaluation/useEvaluationStore";
import useEvaluation from "@/hooks/evaluation/useEvaluation";
import { EvaluationI } from "@/hooks/evaluation/utils";
import useUserEvaluation from "@/hooks/evaluation/useUserEvaluation";
const EvaluationStart = ({
  slug,
  evaluation,
}: {
  slug: string;
  evaluation: EvaluationI;
}) => {
  const { handleEvaluationStart } = useUserEvaluation(slug);
  const [fullName, setName] = React.useState("");
  const setUserEvaluation = useEvaluationStore(
    (state) => state.setUserEvaluation
  );
  const router = useRouter();
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!evaluation) return;
    const userEvaluation = { ...evaluation, userName: fullName };

    handleEvaluationStart(userEvaluation);
    router.push("/evaluations/" + slug + "/1");
  };
  return (
    <div className="mt-10">
      <span className="font-semibold">
        Para comenzar la evaluación introduzca su nombre
      </span>
      <form
        className="grid gap-2 grid-cols-12 items-end justify-between mt-2"
        onSubmit={handleSubmit}
      >
        <div className="grid col-span-12 sm:col-span-9 gap-2">
          <label htmlFor="name">
            Nombre completo
            <span className="text-xs font-bold">(Requerido)</span>
          </label>
          <input
            type="text"
            id="name"
            className="border-2 border-black py-1 px-3"
            placeholder="Nombre Apellido"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button
          className="btn btn-base col-span-12 sm:col-span-3"
          disabled={!fullName || fullName === ""}
          type="submit"
        >
          Comenzar
        </button>
      </form>
    </div>
  );
};

export default EvaluationStart;
