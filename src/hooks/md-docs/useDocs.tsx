import React from "react";
import docsFiles from "./docs";
import { join } from "path";
import fs from "fs";
import { DocsT } from "./docs";
function generateRoute(fileName: string) {
  return join(process.cwd(), "public/docs", fileName);
}
function getContent(filePath: string) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
}
function getDocs() {
  const docs = docsFiles.map((file) => {
    const filePath = generateRoute(`${file.topic}/${file.file}`);
    const content = getContent(filePath);
    return {
      ...file,
      content,
    };
  });
  return docs;
}

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

  return { docs, getContent, docsByTopic, topics };
};

export default useDocs;
