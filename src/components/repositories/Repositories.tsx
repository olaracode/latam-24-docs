import React from "react";
import Link from "next/link";
async function getRepos() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/github/", {
    next: { revalidate: 3600 },
  });
  const data = await response.json();
  return data.repositories;
}
const Repositories = async () => {
  const repos = await getRepos();
  return (
    <div className="border-2 border-black p-3 shadow-brutal">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Repositorios</h2>
        {repos.length}
      </div>
      {repos.map((repo: any) => {
        return (
          <div key={repo.name} className="border-b-2 border-black pb-2 my-2">
            <h3>{repo.name.replace("-", " ").toUpperCase()}</h3>
            <Link
              className="text-sm underline hover:font-bold"
              href={`${repo.url}`}
            >
              Ver en github
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Repositories;
