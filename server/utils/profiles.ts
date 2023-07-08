export const getProfileById = cachedFunction(async (id: string) => {
    const data: any = await $fetch(`http://admin.local/api/blog/profiles/${id}/details`)

    return { id, data, cachedAt: Date.now()}
}, {
    maxAge: 3,
    name: 'getProfileById',
    getKey: (id: string) => id
})
