import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useWebSocketStore = defineStore('websocket', () => {
    const isConnected = ref(false);
    let websocket: WebSocket | null = null;
    const messageHandlers: any = reactive({});

    function connect() {
        return new Promise((resolve, reject) => {
            if (!isConnected.value && !websocket) {
                const websocketAddress = useRuntimeConfig().public.WEBSOCKET_ADDRESS;

                websocket = new WebSocket(websocketAddress);
    
                websocket.onopen = () => {
                    isConnected.value = true;
                    console.log('WebSocket połączony');
                    resolve(true);
                };
    
                websocket.onclose = () => {
                    isConnected.value = false;
                    console.log('WebSocket rozłączony');
                };
    
                websocket.onmessage = (event) => {
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
        if (!isConnected.value) {
            await connect();
        }
    }

    async function sendMessage(message: any) {
        await ensureConnected();
        if (websocket) {
            websocket.send(JSON.stringify(message));
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
        if (websocket) {
            websocket.close();
            isConnected.value = false;
        }
    }

    return { isConnected, connect, sendMessage, disconnect, onMessage, ensureConnected };
});