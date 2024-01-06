export const getBlogPostById = cachedFunction(async (id: string) => {
    const config = useRuntimeConfig()
    const PAPER_API_URL = config.public.PAPER_API_URL

    return await $fetch(`${PAPER_API_URL}/posts/${id}`)
}, {
    maxAge: 3,
    name: 'getBlogPostById',
    getKey: (id: string) => id,
})

export const getBlogPosts = cachedFunction(async () => {
    const config = useRuntimeConfig()
    const PAPER_API_URL = config.public.PAPER_API_URL

    return await $fetch(`${PAPER_API_URL}/posts`)
}, {
    maxAge: 3,
    name: 'getBlogPosts',
    getKey: (id: string) => id,
})
