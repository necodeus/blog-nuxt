const ws: any = ref(null);

function initWebSocket() {
    const connection = new WebSocket('wss://www.necodeo.com:8090');

    connection.onopen = function () {
        console.log('Connected to the server.');
    };

    connection.onerror = function (error: any) {
        console.log('An error occurred: ' + (error.message || 'Unknown Error'));
    };

    connection.onclose = function () {
        console.log('Connection closed. Attempting to reconnect...');
        setTimeout(initWebSocket, 1000);
    };

    ws.value = connection;
}

export default defineNuxtPlugin(nuxtApp => {
    if (!process.client) {
        return;
    }

    initWebSocket();

    nuxtApp.provide('ws', ws);
});
