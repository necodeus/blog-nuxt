export const getBlogPostById = cachedFunction(async (id: string) => {
    console.log('Caching post', id)

    const config = useRuntimeConfig()
    const PAPER_API_URL = config.public.PAPER_API_URL

    return await $fetch(`${PAPER_API_URL}/posts/${id}`)
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
