export default defineEventHandler(async (event) => {
    const { postId, commentId } = event.context.params as any

    return await upvoteCommentById(postId, commentId).catch(() => null)
})
