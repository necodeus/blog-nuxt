
export default defineEventHandler(async (event) => {
    const { id } = event.context.params as any

    const query = getQuery(event) as any

    const ua = getRequestHeader(event, 'User-Agent')
    const ip = event.node.req.headers['x-forwarded-for'] || event.node.req.socket.remoteAddress;

    return await ratePost(id, query?.rating).catch(() => null)
})
