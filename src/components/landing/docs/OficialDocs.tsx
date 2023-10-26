import React from "react";
import Link from "next/link";
// create a list with official documentations from html, css, js, react, python, flask, postgresql, bootstrap
const officialDocs = [
  {
    name: "HTML (MDN)",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS (MDN)",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Bootstrap",
    url: "https://getbootstrap.com/docs",
  },
  {
    name: "JavaScript (MDN)",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    url: "https://react.dev/",
  },
  {
    name: "Python",
    url: "https://docs.python.org/3/",
  },
  {
    name: "Flask",
    url: "https://flask.palletsprojects.com/en/2.0.x/",
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org/docs/",
  },
];

const OficialDocs = () => {
  return (
    <div>
      <ul className="bg-[#FF6767] shadow-brutal text-white grid gap-2 border-2 border-black p-3">
        <h2 className="text-xl font-bold ">Documentación Oficial</h2>
        {officialDocs.map((doc) => (
          <li
            key={`official-docs-${doc.name}`}
            className="p-5 border-2 border-white"
          >
            <Link
              href={doc.url}
              className="hover:underline hover:font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {doc.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OficialDocs;
