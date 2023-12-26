export const getCommentsByPostId = cachedFunction(async (id: string) => {
    const config = useRuntimeConfig()
    const PAPER_API_URL = config.public.PAPER_API_URL

    const data: any = await $fetch(`${PAPER_API_URL}/posts/${id}/comments`)

    return {
        id,
        data,
        cachedAt: Date.now(),
    }
}, {
    maxAge: 3,
    name: 'getCommentsByPostId',
    getKey: (id: string) => id,
})

/**
 * User actions can't be cached because they are not idempotent.
*/

export const upvoteCommentById = async (postId: string, commentId: string) => {
    const config = useRuntimeConfig()
    const PAPER_API_URL = config.public.PAPER_API_URL

    const data: any = await $fetch(`${PAPER_API_URL}/posts/${postId}/comments/${commentId}/upvote`, {
        method: 'POST',
    })

    console.log('upvoteCommentById', data)

    return data
}

export const downvoteCommentById = async (postId: string, commentId: string) => {
    const config = useRuntimeConfig()
    const PAPER_API_URL = config.public.PAPER_API_URL

    const data: any = await $fetch(`${PAPER_API_URL}/posts/${postId}/comments/${commentId}/downvote`, {
        method: 'POST',
    })

    console.log('downvoteCommentById', data)

    return data
}

export const comment = async (postId: string, commentId = '') => {
    const config = useRuntimeConfig()
    const PAPER_API_URL = config.public.PAPER_API_URL

    const data: any = await $fetch(`${PAPER_API_URL}/posts/${postId}/comments/${commentId}`, {
        method: 'POST',
    })

    console.log('comment', data)

    return data
}
