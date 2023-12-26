export default defineEventHandler(async (event) => {
    const { postId, commentId } = event.context.params as any

    console.log('downvote', postId, commentId)

    return await downvoteCommentById(postId, commentId).catch(() => null)
})
