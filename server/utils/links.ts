export const getLinks = cachedFunction(async (path: string) => {
    const data: any = await $fetch(`http://admin.local/api/links?url=${path}`)

    return { path, data, cachedAt: Date.now()}
}, {
    maxAge: 3,
    name: 'getLinks',
    getKey: (path: string) => path
})