<template>
    <div class="mt-1 relative">
        <input v-model="replyText"
            class="w-full pl-[10px] pr-[93.61px] py-[12px] border-[#dfdfdf] border-solid border-[1px] rounded-[7px] resize-none block text-[15px]"
            placeholder="Treść komentarza"
            @keydown.enter.prevent="() => onReply()" />
        <button
            class="rounded-[7px] px-3 text-[15px] absolute right-[4px] bg-[black] top-[4px] bottom-[4px] flex items-center justify-center text-[white]"
            @click="onReply">
            Wyślij

            <svg class="ml-[5px] w-[16px] h-[16px] min-w-[16px] min-h-[16px]" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
        </button>
    </div>
</template>

<script lang="ts" setup>
const {
    commentId,
    actionHandler,
    clearOnAction,
} = defineProps({
    commentId: {
        type: String,
        required: true,
    },
    actionHandler: {
        type: Function,
        required: true,
    },
    clearOnAction: {
        type: Boolean,
        required: false,
        default: false,
    },
})

const replyText = ref('')

const onReply = () => {
    actionHandler({
        action: 'REPLY',
        commentId,
        replyText,
    })

    if (clearOnAction) {
        replyText.value = ''
    }
}
</script>
