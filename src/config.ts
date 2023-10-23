const flags = {
    blog: process.env.NEXT_PUBLIC_BLOG === 'true',
}
const cohort = {
    name: process.env.NEXT_PUBLIC_COHORT_NAME || 'Cohorte',
}

const github = {
    user: process.env.NEXT_PUBLIC_GITHUB_USER || '',
    token: process.env.NEXT_PUBLIC_GITHUB_TOKEN || '',
}

const api = process.env.NEXT_PUBLIC_API_URL || ''

const configs = {
    flags,
    api,
    cohort,
    github,
}

export default configs