import { v4 as uuidv4 } from 'uuid';

export default function () {
    const sessionId = useCookie('sessionId');

    if (sessionId.value) {
        sessionId.value = uuidv4();
    }
}
