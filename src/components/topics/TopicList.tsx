import React from "react";
const topics = [
  "html/css",
  "bootstrap",
  "javascript",
  "react",
  "python",
  "flask",
  "misc",
];

const TopicList = () => {
  return (
    <div className="mt-2">
      <p className="font-bold">Temas</p>
      <div className="flex flex-wrap gap-3 mt-1">
        {topics.map((topic) => (
          <div
            key={`tema-${topic}`}
            className="border-2 border-black shadow-md py-1 px-3"
          >
            <h2 className="text-sm font-bold">{topic}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicList;
