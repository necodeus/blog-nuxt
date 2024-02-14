<template>
    <div class="mb-2 mt-1">
        <div class="flex items-center">
            <button class="flex items-center font-medium" v-on:click.prevent="() => { actionHandler({ action: 'UPVOTE', postId, commentId }) }">
                <LikeButton class="mr-[5px] w-[18px] h-[18px]" :is-active="isUpvoted" />
                {{ upvotes }}
            </button>

            <div class="div-separator"></div>

            <button class="flex items-center font-medium" v-on:click.prevent="() => { actionHandler({ action: 'DOWNVOTE', postId, commentId }) }">
                <DislikeButton class="mr-[5px] w-[18px] h-[18px]" :is-active="isDownvoted" />
                {{ downvotes }}
            </button>

            <div class="div-separator"></div>

            <button class="flex items-center font-medium" v-on:click.prevent="() => { actionHandler({ action: 'EXPAND', commentId }) }" :style="{ transition: 'opacity 0.15s ease-in-out', opacity: isExpanded ? 1 : 0.5 }">
                <RepliesButton class="mr-[5px] w-[18px] h-[18px]" :is-active="isExpanded" />
                {{ repliesCount }}
            </button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    postId: {
        type: String,
        required: true,
    },
    commentId: {
        type: String,
        required: true,
    },
    isUpvoted: {
        type: Boolean,
        required: true,
    },
    isDownvoted: {
        type: Boolean,
        required: true,
    },
    upvotes: {
        type: Number,
        required: true,
    },
    downvotes: {
        type: Number,
        required: true,
    },
    repliesCount: {
        type: Number,
        required: true,
    },
    isExpanded: {
        type: Boolean,
        required: false,
        default: false,
    },
    actionHandler: {
        type: Function,
        required: true,
    },
})
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
