import { useGlobalStore } from '../store/global'

// TODO: Rozważyć przeniesienie tego pliku do store/global.ts
// ponieważ i tak potrzebujemy store z Pinia

export default defineNuxtPlugin((nuxtApp) => {
    if (!process.client) {
        return
    }

    const pinia = usePinia()

    const { setConnection, addPostRating, setPostComments, reconnect } = useGlobalStore(pinia)

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

    ws.onopen = () => {
        console.log(nuxtApp._route.meta.content_id);

        ws.send(JSON.stringify({
            type: 'GET_POST_RATING',
            postId: nuxtApp._route.meta.content_id,
        }))
    }
    
    ws.onclose = function () {
        console.log(nuxtApp._route.meta.content_id);

        console.log('WebSocket connection closed. Reconnecting...')
        setTimeout(() => {
            reconnect()
        }, 1000);
    }
})
