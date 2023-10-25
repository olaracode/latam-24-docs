"use client";
import React from "react";
import NotFound from "@/components/error/NotFound";
import { Container } from "@/components/mics";
const error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="mt-5">
      <Container>
        <NotFound msg={error.message} to="/docs" />
      </Container>
    </div>
  );
};

export default error;
