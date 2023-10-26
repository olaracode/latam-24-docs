import React from "react";
import NotFoundError from "@/components/error/NotFound";
import { Container } from "@/components/mics";
const NotFound = () => {
  return (
    <div className="my-24">
      <Container>
        <NotFoundError
          msg="Ups no encontramos la pagina que estas buscando"
          to="/"
        />
      </Container>
    </div>
  );
};

export default NotFound;
