import React from "react";
import docsFiles from "./docs";
import fs from "fs";
import { DocsT } from "./docs";
import { getContent } from "../utils";
import { getDocs, getRelated } from "./utils";

interface DocsByTopics {
  [key: string]: DocsT[];
}

const useDocs = () => {
  const docs = getDocs();
  const docsByTopic = docs.reduce((acc: DocsByTopics, doc) => {
    if (!acc[doc.topic]) {
      acc[doc.topic] = [];
    }
    acc[doc.topic].push(doc);
    return acc;
  }, {});
  const topics = Object.keys(docsByTopic);

  return { docs, getContent, docsByTopic, topics, getRelated };
};

export default useDocs;
