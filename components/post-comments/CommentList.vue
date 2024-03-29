<template>
    <div>
        <div class="mx-[30px] mt-[15px]" v-for="comment in (comments as any)" :key="comment.id">
            <div class="mb-2 flex">
                <div
                    class="min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] bg-cover bg-center !rounded-full bg-[#eee] mr-3">
                    <img width="40px" height="40px" :src="getGravatarURL(comment.author_name, 40)" class="rounded-full"
                        loading="lazy" />
                </div>
                <div class="flex items-center">
                    <div class="flex items-center">
                        <div class="flex items-center font-medium">{{ comment.author_name }}</div>
                    </div>

                    <div class="div-separator"></div>

                    <div class="flex items-center">
                        {{ moment(comment.created_at).fromNow() }}
                    </div>
                </div>
            </div>

            <CommentContent :content="comment.content" />

            <CommentActions
                :post-id="postId"
                :comment-id="comment.id"
                :upvotes="comment.upvotes"
                :downvotes="comment.downvotes"
                :replies-count="comment.replies.length"
                :is-upvoted="comment.action?.value === 1"
                :is-downvoted="comment.action?.value === -1"
                :is-expanded="comment.id !== activeReplyCommentId"
                :action-handler="actionHandler"
            />

            <div v-if="comment.id === activeReplyCommentId">
                <CommentReply
                    v-for="reply in comment.replies"
                    :key="reply.id"
                    :post-id="postId"
                    :reply="reply"
                    :action-handler="actionHandler"
                />
                <CommentReplyInput
                    :comment-id="comment.id"
                    :action-handler="actionHandler"
                    :clear-on-action="true"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import moment from 'moment/min/moment-with-locales'
import sha256 from 'js-sha256'

import { useBlogStore } from '../../stores/blogStore'
const {
    upvoteComment,
    downvoteComment,
    addComment,
} = useBlogStore()

function getGravatarURL(name: any, size = 40) {
    const lowercaseName = String(name).trim().toLowerCase()

    // @ts-ignore
    const hash = sha256(lowercaseName)

    return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon&r=g`
}

const expandReplies = (commentId = null) => {
    if (activeReplyCommentId.value === commentId) {
        activeReplyCommentId.value = null
    } else {
        activeReplyCommentId.value = commentId
    }
}

const actionHandler = (payload: any) => {
    switch (payload.action) {
        case 'EXPAND':
            expandReplies(payload.commentId)
            break
        case 'REPLY': {
            addComment(props.postId, payload.replyText, payload.commentId)
            break
        }
        case 'UPVOTE':
            upvoteComment(props.postId, payload.commentId)
            break
        case 'DOWNVOTE':
            downvoteComment(props.postId, payload.commentId)
            break
    }
}

moment.locale("pl")

const props = defineProps({
    postId: {
        type: String,
        required: true,
        default: '',
    },
    comments: {
        type: Array,
        required: true,
        default: [],
    },
})

const activeReplyCommentId = ref(null)
</script>

<style scoped>
.div-separator {
    background-color: #b3b3b3;
    border-radius: 999px;
    width: 3px;
    height: 3px;
    margin: 0 10px;
    display: flex;
}
</style>
