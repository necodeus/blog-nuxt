import { v4 as uuidv4, validate } from 'uuid';

export default function () {
    const env = useRuntimeConfig();

    const sessionId = useCookie('sessionId', {
        domain: env.public.WEBSOCKET_SESSION_HOST as string,
    });

    if (!validate(sessionId.value)) {
        sessionId.value = uuidv4();
    }
}
