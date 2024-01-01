export default defineEventHandler(async (event) => {
    const query = getQuery(event) as any

    return await getLinks(query.url).catch(() => null)
})
