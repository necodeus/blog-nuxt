const ws: any = ref(null);

function initWebSocket() {
    const env = useRuntimeConfig();

    const connection = new WebSocket(env.public.WEBSOCKET_ADDRESS as string);

    connection.onerror = function (error: any) {
        console.error(error);
    };

    connection.onclose = initWebSocket;

    ws.value = connection;
}

export default defineNuxtPlugin((nuxtApp) => {
    if (!process.client) {
        return;
    }

    initWebSocket();

    nuxtApp.provide('ws', ws);
});
