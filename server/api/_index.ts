export default defineEventHandler(async () => {
    return await getIndexData().catch(() => null)
})
