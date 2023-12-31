import { v4 as uuidv4, validate } from 'uuid';

export default function () {
    const sessionId = useCookie('sessionId');

    if (!validate(sessionId.value)) {
        sessionId.value = uuidv4();
    }
}
