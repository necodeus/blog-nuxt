export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    return await getLinks(query.url).catch(() => null)
})
