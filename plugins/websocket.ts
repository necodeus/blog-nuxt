import { useGlobalStore } from '../store/global'

export default defineNuxtPlugin((nuxtApp) => {
    if (!process.client) {
        return
    }

    const pinia = usePinia()

    const { setConnection, addPostRating, setPostComments } = useGlobalStore(pinia)

    const ws = new WebSocket(useRuntimeConfig().public.WEBSOCKET_ADDRESS)

    setConnection(ws)

    ws.onerror = function (error) {
        console.error('error', error)
    }

    ws.onmessage = function (messageEvent: WebSocketEventMap['message']) {
        try {
            const data = JSON.parse(messageEvent.data)

            switch (data.type) {
                case 'RATINGS_AVERAGE':
                    addPostRating(data.postId, data.average)
                    break
                case 'POST_COMMENTS':
                    setPostComments(data.postId, data.comments)
                    break
            }
        } catch (error) {
            console.error('UNKNOWN ERROR', error)
        }
    }
})
