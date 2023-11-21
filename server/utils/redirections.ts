import { COMMON_API_URL } from "../config/env"

export const getRedirectionById = cachedFunction(async (id: string) => {
    const data: any = await $fetch(`${COMMON_API_URL}/redirections/${id}`)

    return { id, data, cachedAt: Date.now() }
}, {
    maxAge: 3,
    name: 'getRedirectionById',
    getKey: (id: string) => id
})
