export default defineEventHandler(async (event) => {
    const { postId, commentId } = event.context.params as any

    console.log('comment', postId, commentId)

    return await comment(postId, commentId).catch(() => null)
})
