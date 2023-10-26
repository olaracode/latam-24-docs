import configs from "@/config";
import { getRepos } from "./utils";

const useGithub = () => {
  const { cohort, github } = configs;
  const getCurrentRepos = async () => {
    try {
      const repos = await getRepos(github.user, cohort.name);
      return repos;
    } catch (error: any) {
      throw new Error(error.message, { cause: "something" });
    }
  };
  return {
    getCurrentRepos,
  };
};

export default useGithub;
