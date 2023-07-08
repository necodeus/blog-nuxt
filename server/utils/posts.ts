export const getBlogPostById = cachedFunction(async (id: string) => {
    const data: any = await $fetch(`http://admin.local/api/blog/posts/${id}`)

    return { id, data, cachedAt: Date.now()}
}, {
    maxAge: 3,
    name: 'getBlogPostById',
    getKey: (id: string) => id
})

export const getBlogPosts = cachedFunction(async (id: string) => {
    const data: any = await $fetch(`http://admin.local/api/blog/posts`)

    return { id, data, cachedAt: Date.now()}
}, {
    maxAge: 3,
    name: 'getBlogPosts',
    getKey: (id: string) => id
})
