<template>
    <div class="font-jost py-[30px] text-[17px]" v-observe-visibility="commentsVisibility">
        <CommentHeading :comments-count="comments?.length" />
        <CommentInput
            :action-handler="actionHandler"
            :clear-on-action="true"
        />
        <CommentList v-if="isCommentsVisible && comments?.length > 0" :post-id="postId" :comments="comments" />
        <CommentListEmpty v-if="isCommentsVisible && comments?.length === 0" />
        <CommentListPlaceholder v-if="!isCommentsVisible" />
    </div>
</template>

<script setup>
import { useBlogStore } from '../../stores/blogStore'
import { useWebSocketStore } from '../../stores/websocketStore';

const {
    fetchCommentsForPost,
    getCommentsForPost,
    addComment,
    getConnection,
} = useBlogStore()

const props = defineProps({
    postId: {
        type: String,
        required: true,
        default: '',
    },
})

const comments = computed(() => getCommentsForPost(props.postId))

const actionHandler = (payload) => {
    switch (payload.action) {
        case 'COMMENT': {
            addComment(props.postId, payload.commentText)
            break
        }
    }
}

const isCommentsVisible = ref(false)

const commentsVisibility = (isVisible) => {
    if (!isCommentsVisible.value && isVisible && getConnection() && props.postId && props.postId.length > 0) {
        console.log('Fetching comments for post', props.postId)

        fetchCommentsForPost(props.postId)
        isCommentsVisible.value = true
    }
}
</script>
