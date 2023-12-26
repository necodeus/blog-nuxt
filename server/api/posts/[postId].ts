// import { delay } from "@/utils/helpers";

export default defineEventHandler(async (event) => {
    const { postId } = event.context.params as any

    // await delay(3000);

    return await getBlogPostById(postId).catch(() => null)
})
