import evaluations from "./evaluations";
import { getContent, generateRoute } from "../utils";

const BASE_PATH = "public/evaluations/";

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  selected?: string;
  correct?: boolean;
}

export interface EvaluationI {
  user?: string;
  title: string;
  topic: string;
  description: string;
  slug: string;
  questions: Question[];
}

/* How to specify a function return type  */

function getEvaluations(): EvaluationI[] {
  const evaluationsContent = evaluations.map((evaluation) => {
    const route = generateRoute(
      BASE_PATH,
      `${evaluation.topic}/${evaluation.file}`
    );
    const content = getContent(route, true);
    const slug = evaluation.file.replace(".json", "").replace("/", "");
    return { slug, ...content };
  });
  return evaluationsContent;
}

export { getEvaluations };
