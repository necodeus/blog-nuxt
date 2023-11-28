export const getBlogPostById = cachedFunction(async (id: string) => {
    const config = useRuntimeConfig()
    const PAPER_API_URL = config.public.PAPER_API_URL

    const data: any = await $fetch(`${PAPER_API_URL}/posts/${id}`)

    return { id: `post-${id}`, data, cachedAt: Date.now()}
}, {
    maxAge: 3,
    name: 'getBlogPostById',
    getKey: (id: string) => id
})

export const getBlogPosts = cachedFunction(async () => {
    const config = useRuntimeConfig()
    const PAPER_API_URL = config.public.PAPER_API_URL

    const data: any = await $fetch(`${PAPER_API_URL}/posts`)

    return { id: 'posts', data, cachedAt: Date.now()}
}, {
    maxAge: 3,
    name: 'getBlogPosts',
    getKey: (id: string) => id
})
