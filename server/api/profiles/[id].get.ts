export default defineEventHandler(async (event) => {
    const { id } = event.context.params as any

    return await getProfileById(id).catch(() => null)
})
