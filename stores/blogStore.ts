import { defineStore } from 'pinia';
import { useWebSocketStore } from './websocketStore';

export const useBlogStore = defineStore('blog', () => {
    const clientsCount = ref(0);
    const postRatings: any = ref({});
    const postComments: any = ref({});

    async function init() {
        const websocketStore = useWebSocketStore();
        await websocketStore.connect();

        websocketStore.onMessage('CLIENTS_COUNT', (message: any) => {
            console.log('Received clients count:', message.count);
            clientsCount.value = message.count;
        });

        websocketStore.onMessage('RATINGS_AVERAGE', (message: any) => {
            console.log('Received post rating:', message.postId, message.average);
            postRatings.value[message.postId] = message.average;
        });

        websocketStore.onMessage('POST_COMMENTS', (message: any) => {
            console.log('Received post comments:', message.postId, message.comments);
            postComments.value[message.postId] = message.comments;
        });
    }

    function fetchPostRating(postId: any) {
        const websocketStore = useWebSocketStore();

        websocketStore.sendMessage({
            type: 'GET_POST_RATING',
            postId: postId,
        });
    }

    function updatePostRating(postId: any, value: any) {
        const websocketStore = useWebSocketStore();

        websocketStore.sendMessage({
            type: 'UPDATE_POST_RATING',
            postId: postId,
            value: value,
        });
    }

    function fetchCommentsForPost(postId: any) {
        const websocketStore = useWebSocketStore();

        websocketStore.sendMessage({
            type: 'GET_POST_COMMENTS',
            postId: postId,
        });
    }

    function getRatingForPost(postId: any) {
        return postRatings.value[postId] || 0;
    }

    function getCommentsForPost(postId: any) {
        return postComments.value[postId] || [];
    }

    return {
        clientsCount,
        postRatings, postComments,
        init,
        fetchPostRating, updatePostRating, fetchCommentsForPost,
        getRatingForPost, getCommentsForPost,
    };
});
