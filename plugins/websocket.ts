import { usePostsStore } from '../store/posts';

export default defineNuxtPlugin((nuxtApp) => {
    if (!process.client) {
        return;
    }

    const pinia = usePinia();

    const { addPostRating, setConnection } = usePostsStore(pinia)

    const ws = new WebSocket(useRuntimeConfig().public.WEBSOCKET_ADDRESS);
    setConnection(ws);

    ws.onerror = function (error) {
        console.error(error);
    };

    ws.onmessage = function (messageEvent: WebSocketEventMap['message']) {
        try {
            const data = JSON.parse(messageEvent.data);

            if (data.type === 'RATINGS_AVERAGE') {
                addPostRating(data.postId, data.average);
            }
        } catch (error) {
            console.error(error);
        }
    };
});
