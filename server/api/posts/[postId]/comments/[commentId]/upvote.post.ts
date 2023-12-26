export default defineEventHandler(async (event) => {
    const { postId, commentId } = event.context.params as any

    console.log('upvote', postId, commentId)

    return await upvoteCommentById(postId, commentId).catch(() => null)
})
