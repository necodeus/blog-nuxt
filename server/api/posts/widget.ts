export default defineEventHandler(async (event) => {
    return await getBlogPosts().catch(() => null)
})
