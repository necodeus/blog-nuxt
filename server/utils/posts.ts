import { PAPER_API_URL } from '../config/env'

export const getBlogPostById = cachedFunction(async (id: string) => {
    const data: any = await $fetch(`${PAPER_API_URL}/posts/${id}`)

    return { id: `post-${id}`, data, cachedAt: Date.now()}
}, {
    maxAge: 3,
    name: 'getBlogPostById',
    getKey: (id: string) => id
})

export const getBlogPosts = cachedFunction(async () => {
    const data: any = await $fetch(`${PAPER_API_URL}/posts`)

    return { id: 'posts', data, cachedAt: Date.now()}
}, {
    maxAge: 3,
    name: 'getBlogPosts',
    getKey: (id: string) => id
})
