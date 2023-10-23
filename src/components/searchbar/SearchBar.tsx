import React from "react";
import TopicList from "../topics/TopicList";
const SearchBar = () => {
  return (
    <div className="w-full border-2 border-black p-4 shadow-brutal">
      <h2 className="text-lg font-bold">Busca un tema</h2>
      <input
        type="text"
        className="border-2 border-black w-full p-2"
        placeholder="Eventos javascript"
      />
      <TopicList />
    </div>
  );
};

export default SearchBar;
