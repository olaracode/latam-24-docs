"use client";
import React from "react";
import BaseError from "@/components/error/BaseError";
import { Container } from "@/components/mics";
const error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  console.log("hi", error.cause);
  console.log(process.env.NODE_ENV);
  return (
    <div className="mt-40 h-full flex items-center justify-center">
      <Container>
        <BaseError reset={reset} />
      </Container>
    </div>
  );
};

export default error;
