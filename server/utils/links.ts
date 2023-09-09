import { COMMON_API_URL } from '../config/env'

export const getLinks = cachedFunction(async (url: string) => {
    const data: any = await $fetch(`${COMMON_API_URL}/links`, {
        params: {
            url: url,
        },
    })

    return { url, data, cachedAt: Date.now()}
}, {
    maxAge: 3,
    name: 'getLinks',
    getKey: (path: string) => path
})
