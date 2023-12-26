export default defineEventHandler(async (event) => {
    const { postId } = event.context.params as any

    return await getCommentsByPostId(postId).catch(() => null)
})
