export default defineEventHandler(async (event) => {
    const { path } = getQuery(event) as any

    return await getPageData(path).catch(() => null)
})
