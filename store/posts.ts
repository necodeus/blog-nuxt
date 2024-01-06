import { defineStore } from 'pinia'

type Rating = {
    postId: string
    average: number
}

export const usePostsStore = defineStore('postStore', () => {
    const postRatings = ref<Rating[]>([])

    const connection = ref<WebSocket>()

    function addPostRating(postId: Rating['postId'], average: Rating['average']) {
        const index = postRatings.value.findIndex((item: Rating) => item.postId === postId)

        if (index === -1) {
            postRatings.value.push({ postId, average })
        } else {
            postRatings.value[index] = { postId, average }
        }
    }

    function getPostRating(postId: Rating['postId']) {
        const index = postRatings.value.findIndex((item: Rating) => item.postId === postId)

        if (index === -1) {
            return null
        }

        return postRatings.value[index].average * 1
    }

    function setConnection(ws: WebSocket) {
        connection.value = ws
    }

    function getConnection() {
        return connection.value
    }

    return {
        addPostRating, getPostRating, postRatings,
        setConnection, getConnection, connection,
    }
})
