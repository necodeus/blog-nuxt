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

        console.log('fetchPostRating', postId);

        websocketStore.sendMessage({
            type: 'GET_POST_RATING',
            postId: postId,
        });
    }

    function updatePostRating(postId: any, value: any) {
        const websocketStore = useWebSocketStore();

        console.log('updatePostRating', postId, value);

        websocketStore.sendMessage({
            type: 'UPDATE_POST_RATING',
            postId: postId,
            value: value,
        });
    }

    function fetchCommentsForPost(postId: any) {
        const websocketStore = useWebSocketStore();

        console.log('fetchCommentsForPost', postId);

        websocketStore.sendMessage({
            type: 'GET_POST_COMMENTS',
            postId: postId,
        });
    }

    function addComment(postId: string, comment: string, parentId: string | null = null) {
        const websocketStore = useWebSocketStore();

        console.log('addComment', postId, comment);

        websocketStore.sendMessage({
            type: 'ADD_COMMENT',
            postId,
            commentId: parentId,
            commentText: comment,
        });
    }

    function upvoteComment(postId: any, commentId: any) {
        const websocketStore = useWebSocketStore();

        console.log('upvoteComment', postId, commentId);

        websocketStore.sendMessage({
            type: 'UPVOTE_COMMENT',
            postId,
            commentId,
        });
    }

    function downvoteComment(postId: any, commentId: any) {
        const websocketStore = useWebSocketStore();

        console.log('downvoteComment', postId, commentId);

        websocketStore.sendMessage({
            type: 'DOWNVOTE_COMMENT',
            postId,
            commentId,
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
        addComment, upvoteComment, downvoteComment,
        getRatingForPost, getCommentsForPost,
    };
});
