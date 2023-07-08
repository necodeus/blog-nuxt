// import { delay } from "@/utils/helpers";

export default defineEventHandler(async (event) => {
    // await delay(3000);

    return await getBlogPosts().catch(() => null)
})
