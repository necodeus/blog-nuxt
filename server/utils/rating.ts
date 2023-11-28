export const ratePost = async (id: string, rating: number) => {
    const config = useRuntimeConfig()
    const PAPER_API_URL = config.public.PAPER_API_URL

    const data: any = await $fetch(`${PAPER_API_URL}/posts/${id}/rating/set?userRating=${rating}`).catch((err) => err.data);

    return {
        id,
        rating,
        data,
    }
}
