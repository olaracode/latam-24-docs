import React from "react";
import Link from "next/link";
import useGithub from "@/hooks/useGithub";
import { cache } from "react";

const Repositories = async () => {
  const { getCurrentRepos } = useGithub();
  const cacheResponse = cache(async () => {
    const response = await getCurrentRepos();
    return response;
  });
  const repos = await cacheResponse();
  return (
    <div className="border-2 border-black p-3 shadow-brutal">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Repositorios</h2>
        {repos && repos.length}
      </div>
      {repos &&
        repos.length > 0 &&
        repos.map((repo: any) => {
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
