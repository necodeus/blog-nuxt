export default defineEventHandler(async (event) => {
    const { postId } = event.context.params as any

    return await getBlogPostById(postId).catch(() => null)
})
