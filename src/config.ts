const flags = {
    blog: process.env.NEXT_PUBLIC_BLOG === 'true',
}
const cohort = {
    name: process.env.NEXT_PUBLIC_COHORT_NAME || 'Cohorte',
}

const api = process.env.NEXT_PUBLIC_API_URL || ''
const configs = {
    flags,
    api,
    cohort
}

export default configs