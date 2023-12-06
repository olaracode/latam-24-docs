const flags = {
  blog: process.env.NEXT_PUBLIC_BLOG === "true",
  evaluation: process.env.NEXT_PUBLIC_EVALUATION_MODULE === "true",
};

const cohort = {
  name: process.env.NEXT_PUBLIC_COHORT_NAME || "Cohorte",
};

const github = {
  user: process.env.NEXT_PUBLIC_GITHUB_USER || "",
  token: process.env.NEXT_PUBLIC_GITHUB_TOKEN || "",
};

const meta = {
  projectRepository: process.env.NEXT_PUBLIC_GITHUB_REPO || "",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
};

const configs = {
  flags,
  cohort,
  github,
  meta,
};

export default configs;
