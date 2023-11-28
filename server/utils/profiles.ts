export const getProfileById = cachedFunction(async (id: string) => {
    const config = useRuntimeConfig()
    const PAPER_API_URL = config.public.PAPER_API_URL

    const data: any = await $fetch(`${PAPER_API_URL}/profiles/${id}/details`)

    return { id, data, cachedAt: Date.now()}
}, {
    maxAge: 3,
    name: 'getProfileById',
    getKey: (id: string) => id
})
