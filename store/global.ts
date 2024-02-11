import { defineStore } from 'pinia'

type Rating = {
    postId: string
    average: number
}

export const useGlobalStore = defineStore('globalStore', () => {
    const connection = ref<WebSocket>()

    const postRatings = ref<Rating[]>([])
    const postComments = ref<any>([])

    // WebSocket

    function setConnection(ws: WebSocket) {
        connection.value = ws
    }

    function getConnection() {
        return connection.value
    }

    function send(payload: object) {
        if (!connection.value) {
            console.error('WebSocket connection not established. Aborting.')
            return
        }

        if (connection.value.readyState !== WebSocket.OPEN) {
            reconnect()
            return
        }

        connection.value.send(JSON.stringify(payload))
    }

    const reconnect = () => {
        const nuxtApp = useNuxtApp()
        
        console.log('[DEBUG] Current Page CID', nuxtApp?._route?.meta?.content_id)

        if (connection.value) {
            connection.value.close()
        }

        const newConnection = new WebSocket(useRuntimeConfig().public.WEBSOCKET_ADDRESS)
        setConnection(newConnection)
    }

    // Ratings

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

    // Comments

    function setPostComments(postId: any, c: any) {
        const index = postComments.value.findIndex((item: any) => item.postId === postId)

        if (index === -1) {
            postComments.value.push({ postId, comments: c })
        } else {
            postComments.value[index] = { postId, comments: c }
        }
    }

    function getPostComments(postId: string) {
        const index = postComments.value.findIndex((item: any) => item.postId === postId)

        if (index === -1) {
            return null
        }

        return postComments.value[index].comments
    }

    // Exports

    return {
        // WebSocket
        setConnection, getConnection, connection,
        send,
        reconnect,
        // Ratings
        addPostRating, getPostRating, postRatings,
        // Comments
        setPostComments, getPostComments, postComments,
    }
})
