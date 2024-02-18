export const getIndexData = cachedFunction(async () => {
    const config = useRuntimeConfig()
    const PAPER_API_URL = config.public.PAPER_API_URL

    console.log(`${PAPER_API_URL}/posts`)

    return await $fetch(`${PAPER_API_URL}/posts`)
}, {
    maxAge: 3,
    name: 'getIndexData',
    getKey: (id: string) => id,
})
