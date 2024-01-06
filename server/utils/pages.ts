
export const getLinks = cachedFunction(async (url: string) => {
    const config = useRuntimeConfig()
    const COMMON_API_URL = config.public.COMMON_API_URL

    return await $fetch(`${COMMON_API_URL}/page`, {
        params: {
            slug: url,
        },
    })
}, {
    maxAge: 3,
    name: 'getLinks',
    getKey: (path: string) => path,
})
