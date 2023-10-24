import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

const cohortId = process.env.NEXT_PUBLIC_COHORT_NAME;

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

  console.log("repos length--------", repos.length);
  const filteredRepos = repos.filter(
    (repo) => repo.description && repo.description.includes(keyword)
  );
  const formatedRepos = filteredRepos.map(formatRepo);
  console.log(formatedRepos);
  return formatedRepos;
}

const useGithub = () => {
  const getCurrentRepos = async () => {
    try {
      if (!cohortId) return;
      const repos = await getRepos("olaracode", cohortId);
      return repos;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getCurrentRepos,
  };
};

export default useGithub;
