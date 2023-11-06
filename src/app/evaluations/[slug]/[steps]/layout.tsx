import React from "react";
import EvaluationNavigation from "@/components/evaluation/EvaluationNavigation";
import useEvaluation from "@/hooks/evaluation/useEvaluation";
const Layout = ({
  params,
  children,
}: {
  params: {
    slug: string;
    steps: string;
  };
  children: React.ReactNode;
}) => {
  const { current } = useEvaluation(params.slug);
  if (!current) return null;
  return (
    <div>
      {children}
      <hr className="my-5" />
      <EvaluationNavigation
        current={parseInt(params.steps)}
        evaluation={current}
      />
    </div>
  );
};

export default Layout;
