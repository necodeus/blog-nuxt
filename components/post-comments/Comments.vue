<template>
    <div class="component-border-horizontal font-jost py-[30px] text-[17px]" v-observe-visibility="visibilityChanged">
        <CommentHeading :comments-count="comments?.length" />
        <CommentInput
            :action-handler="actionHandler"
            :clear-on-action="true"
        />
        <CommentListPlaceholder v-if="comments === null" />
        <CommentList v-else :post-id="postId" :comments="comments" />
        <CommentListEmpty v-if="comments?.length === 0" />
    </div>
</template>

<script setup>
const comments = computed(() => getPostComments(props.postId))

const props = defineProps({
    postId: {
        type: String,
        required: true,
        default: '',
    },
})

const actionHandler = (payload) => {
    switch (payload.action) {
        case 'COMMENT':
            send({
                type: 'ADD_COMMENT',
                postId: props.postId,
                commentId: null,
                commentText: payload.commentText,
            })
            break
    }
}

import { useGlobalStore } from '../../store/global'
const { send, getPostComments } = useGlobalStore()

const visibilityChanged = async (isVisible, disconnectObserver) => {
    if (!isVisible) {
        return
    }

    disconnectObserver()

    // await new Promise(resolve => setTimeout(resolve, 3000))

    send({
        type: 'GET_POST_COMMENTS',
        postId: props.postId,
    })
}
</script>
