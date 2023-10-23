import React from "react";
import docsFiles from "./docs";
import { join } from "path";
import fs from "fs";

function generateRoute(fileName: string) {
  return join(process.cwd(), "public/docs", fileName);
}
function getContent(filePath: string) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
}
function getDocs() {
  const docs = docsFiles.map((file) => {
    const filePath = generateRoute(file.file);
    const content = getContent(filePath);
    return {
      ...file,
      content,
    };
  });
  return docs;
}

const useDocs = () => {
  const docs = getDocs();
  return { docs, getContent };
};

export default useDocs;
