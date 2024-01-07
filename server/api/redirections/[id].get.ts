// import { delay } from "@/utils/helpers"

export default defineEventHandler(async (event) => {
    const { id } = event.context.params as any

    // await delay(3000)

    return await getRedirectionById(id).catch(() => null)
})
