import React from "react";
import { Container } from "@/components/mics";
import useDocs from "@/hooks/md-docs/useDocs";
import Link from "next/link";
import { Metadata } from "next";
import configs from "@/config";
import Card from "@/components/Card";
import CustomLink from "@/components/CustomLink";
const Docs = () => {
  const { topics, docsByTopic } = useDocs();
  return (
    <>
      <Container>
        <div className="my-10">
          <h1 className="text-2xl font-bold my-5">Documentación</h1>
          <ul className="grid gap-10">
            {topics.map((topic) => {
              return (
                <li key={`${topic}-tema`} id={topic}>
                  <Card.Body>
                    <Card.Header
                      title={topic}
                      hType="h2"
                      Side={
                        <CustomLink to={`/docs/${topic}`} content="Ver Todos" />
                      }
                    />
                    <ul className="grid gap-3 mt-3">
                      {docsByTopic[topic].slice(0, 3).map((doc) => {
                        return (
                          <Card.ListItem key={doc.file}>
                            <h3 className="font-bold">{doc.name}</h3>
                            <CustomLink
                              to={`/docs/${topic}/${doc.file.replace(
                                ".md",
                                ""
                              )}`}
                              content="Ver más"
                            />
                          </Card.ListItem>
                        );
                      })}
                    </ul>
                  </Card.Body>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Docs;
