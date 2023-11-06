import docsFiles from "./docs";
import { generateRoute, getContent } from "../utils";
import { DocsT } from "./docs";

/**
 * getDocs: gets all the md content from the docsFiles
 * getRelates: gets all the Doc files that are related to the current one
 */

interface DocsByTopics {
  [key: string]: DocsT[];
}

// local docs base path
const BASE_PATH = "public/docs";

function getDocs() {
  const docs = docsFiles.map((file) => {
    const filePath = generateRoute(BASE_PATH, `${file.topic}/${file.file}`);
    const content = getContent(filePath);
    return {
      ...file,
      content,
    };
  });
  return docs;
}

function getRelated(docs: DocsT[], currentDoc: DocsT) {
  // get all docs with the same topic but not the same file
  // get all docs with matching tags
  const related = docs.filter(
    (doc) =>
      doc.topic === currentDoc.topic &&
      doc.file !== currentDoc.file &&
      doc.tags.some((tag) => currentDoc.tags.includes(tag))
  );
  return related;
}

export { getDocs, getRelated };
