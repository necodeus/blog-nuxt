export default defineEventHandler(async (event) => {
    const { postId } = event.context.params as any

    console.log('comment', postId)

    return await comment(postId).catch(() => null)
})
