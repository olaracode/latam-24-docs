import React from "react";
import useEvaluation from "@/hooks/evaluation/useEvaluation";
import NotFound from "@/components/error/NotFound";
import { Container } from "@/components/mics";
import Card from "@/components/Card";

const EvaluationNotFound = () =>
  NotFound({
    msg: "Evaluación no encontrada",
    to: "/evaluation",
  });

const Layout = ({
  params,
  children,
}: {
  params: {
    slug: string;
  };
  children: React.ReactNode;
}) => {
  const { current } = useEvaluation(params.slug);
  if (!current)
    return (
      <Container>
        <EvaluationNotFound />
      </Container>
    );
  return (
    <Container>
      <Card.Body>
        <Card.Header title={current.title} hType="h1" />
        <hr />
        {children}
      </Card.Body>
    </Container>
  );
};

export default Layout;
