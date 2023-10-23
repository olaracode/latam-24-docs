export type DocsT = {
  name: string;
  file: string;
  topic: string;
  tags: string[];
  content: string;
};

const htmlDocs: DocsT[] = [
  {
    name: "Introduccion a html",
    file: "intro-html.md",
    topic: "html",
    content: "",
    tags: ["html"],
  },
  
];

const cssDocs: DocsT[] = [
  {
    name: "Introducción a css",
    file: "intro-css.md",
    topic: "css",
    content: "",
    tags: ["css"],
  },
  {
    name: "Bootstrap",
    file: "intro-bootstrap.md",
    topic: "css",
    content: "",
    tags: ["css"],
  },
]

const vsCodeDocs: DocsT[] = [
  {
    name: "Comandos Visual Studio",
    file: "vs-code-shortcuts.md",
    topic: "vs-code",
    content: "",
    tags: ["misc"],
  }
]

const docs: DocsT[] = [
    ...htmlDocs,
    ...cssDocs,
    ...vsCodeDocs
]

export default docs;
