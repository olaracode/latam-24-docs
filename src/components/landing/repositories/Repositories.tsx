import React from "react";
import Link from "next/link";
import useGithub from "@/hooks/github/useGithub";
import { cache } from "react";
import Card from "@/components/Card";
import CustomLink from "@/components/CustomLink";
const Repositories = async () => {
  const { getCurrentRepos } = useGithub();
  const cacheResponse = cache(async () => {
    const response = await getCurrentRepos();
    return response;
  });
  const repos = await cacheResponse();
  return (
    <Card.Body>
      <Card.Header
        title="Repositorios"
        hType="h2"
        Side={<span>{repos && repos.length}</span>}
      />
      <ul className="grid gap-4">
        {repos &&
          repos.length > 0 &&
          repos.map((repo: any) => {
            return (
              <Card.ListItem key={repo.name}>
                <h3>{repo.name.replace("-", " ").toUpperCase()}</h3>
                <CustomLink to={repo.url} content="Ver en github" />
              </Card.ListItem>
            );
          })}
      </ul>
    </Card.Body>
  );
};

export default Repositories;
