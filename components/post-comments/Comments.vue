<template>
    <div class="font-jost py-[30px] text-[17px]" v-observe-visibility="commentsVisibility">
        <CommentHeading :comments-count="comments?.length" />
        <CommentInput
            :action-handler="actionHandler"
            :clear-on-action="true"
        />
        <CommentList v-if="isCommentsVisible" :post-id="postId" :comments="comments" />
        <CommentListPlaceholder v-if="!isCommentsVisible || comments == null" />
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

const isCommentsVisible = ref(false)

const commentsVisibility = async (isVisible) => {
    console.log('commentsVisibility', isVisible)

    if (isVisible && !(isCommentsVisible.value && comments.value !== null)) {
        isCommentsVisible.value = true

        send({
            type: 'GET_POST_COMMENTS',
            postId: props.postId,
        })
    }
}
</script>
