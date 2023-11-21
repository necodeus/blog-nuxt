import { PAPER_API_URL } from '../config/env'

export const ratePost = async (id: string, rating: number) => {
    const data: any = await $fetch(`${PAPER_API_URL}/posts/${id}/rating/set?userRating=${rating}`).catch((err) => err.data);

    return {
        id,
        rating,
        data,
    }
}
