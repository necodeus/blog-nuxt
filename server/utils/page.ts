export const getPageData = cachedFunction(async (slug: string) => {
    const config = useRuntimeConfig()
    const PAPER_API_URL = config.public.PAPER_API_URL

    console.log(`${PAPER_API_URL}/page?slug=${slug}`)

    return await $fetch(`${PAPER_API_URL}/page?slug=${slug}`)
        .catch(() => {
            return {
                error: true,
            }
        })
}, {
    maxAge: 3,
    name: 'getPageData',
    getKey: (id: string) => id,
})
