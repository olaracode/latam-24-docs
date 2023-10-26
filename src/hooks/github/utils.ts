import { Octokit } from "octokit";


const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });
  
  
  function formatRepo(repository: {
    name: string;
    html_url: string;
    description: string;
  }) {
    return {
      name: repository.name,
      url: repository.html_url,
    };
  }
  
  async function getRepos(username: string, keyword: string) {
    if (username === "") {
      throw new Error("Error al buscar los repositorios", {
        cause: "Check the .env file and add the NEXT_PUBLIC_GITHUB_USER variable",
      });
    }
    let repos: any[] = [];
    let page = 1;
  
    while (true) {
      const { data } = await octokit.rest.repos.listForUser({
        username: username,
        per_page: 100,
        page: page,
      });
  
      if (data.length === 0) break; // No more repos, break the loop
  
      repos = repos.concat(data);
      page++;
    }
  
    const filteredRepos = repos.filter(
      (repo) => repo.description && repo.description.includes(keyword)
    );
    const formatedRepos = filteredRepos.map(formatRepo);
    return formatedRepos;
  }

export {getRepos}