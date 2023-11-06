import { create } from "zustand";
import { EvaluationI } from "./utils";
type State = {
  userEvaluation: EvaluationI | null;
  setUserEvaluation: (evaluation: EvaluationI) => void;

  // selected
  selectedOption: string | null;
  setSelectedOption: (option: string) => void;
  clearSelectedOption: () => void;
};

export const useEvaluationStore = create<State>((set) => ({
  userEvaluation: null,
  setUserEvaluation: (evaluation) => set({ userEvaluation: evaluation }),

  // Selected
  selectedOption: null,
  setSelectedOption: (option) => set({ selectedOption: option }),
  clearSelectedOption: () => set({ selectedOption: null }),
}));
