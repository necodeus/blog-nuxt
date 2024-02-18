import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useWebSocketStore = defineStore('websocket', () => {
    const isConnected = ref(false);
    let websocket: WebSocket | null = null;
    const messageHandlers: any = reactive({});

    async function connect() {
        return new Promise((resolve, reject) => {
            if (!isConnected.value && !websocket) {
                const websocketAddress = useRuntimeConfig().public.WEBSOCKET_ADDRESS;

                websocket = new WebSocket(websocketAddress);

                websocket.onopen = () => {
                    console.log('WebSocket połączony');
                    isConnected.value = true;
                    resolve(true);
                };

                websocket.onclose = () => {
                    console.log('WebSocket rozłączony');
                    isConnected.value = false;
                };

                websocket.onmessage = (event) => {
                    console.log('Odebrano wiadomość WebSocket:', JSON.parse(event.data));
                    handleIncomingMessage(event.data);
                };

                websocket.onerror = (error) => {
                    console.log('Błąd WebSocket: ', error);
                    reject(error);
                };
            } else {
                resolve(true);
            }
        });
    }

    async function ensureConnected() {
        console.log('Sprawdzanie połączenia WebSocket...');

        if (!isConnected.value) {
            console.log('Brak połączenia WebSocket, próba ponownego połączenia');
            await connect();
            isConnected.value = true;
        } else {
            console.log('OK!');
        }
    }

    async function sendMessage(message: any) {
        await ensureConnected();

        if (websocket) {
            console.log('Wysyłanie wiadomości WebSocket:', message);

            websocket.send(JSON.stringify(message));
        } else {
            console.error('Wywołano sendMessage() przed połączeniem WebSocket');
        }
    }

    function handleIncomingMessage(messageData: any) {
        try {
            const message = JSON.parse(messageData);

            const handler = messageHandlers[message.type];

            if (handler) {
                handler(message);
            }
        } catch (error) {
            console.error('Błąd przetwarzania wiadomości: ', error);
        }
    }

    function onMessage(type: any, handler: any) {
        messageHandlers[type] = handler;
    }

    function disconnect() {
        console.log('Rozłączanie WebSocket');

        if (websocket) {
            websocket.close();
            isConnected.value = false;
        }
    }

    return { isConnected, connect, sendMessage, disconnect, onMessage, ensureConnected };
});