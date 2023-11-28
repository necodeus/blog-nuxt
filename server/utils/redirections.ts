export const getRedirectionById = cachedFunction(async (id: string) => {
    const config = useRuntimeConfig()
    const COMMON_API_URL = config.public.COMMON_API_URL

    const data: any = await $fetch(`${COMMON_API_URL}/redirections/${id}`)

    return { id, data, cachedAt: Date.now() }
}, {
    maxAge: 3,
    name: 'getRedirectionById',
    getKey: (id: string) => id
})
