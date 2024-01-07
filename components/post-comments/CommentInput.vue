<template>
    <div>
        <div class="mb-2 mx-[30px]">Dodaj komentarz</div>

        <div class="mb-[30px] mx-[9px]">
            <textarea v-model="commentText"
                class="w-full h-[180px] p-[20px] border-[#dfdfdf] border-solid border-[1px] rounded-[14px] resize-none block mb-2"
                placeholder="Treść komentarza" @keydown.enter.prevent="onComment"></textarea>

            <div class="flex items-center justify-between flex-col">
                <FormButton :on-click="onComment" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const {
    actionHandler,
    clearOnAction,
} = defineProps({
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

const commentText = ref('')

const onComment = () => {
    actionHandler({
        action: 'COMMENT',
        commentId: null,
        commentText,
    })

    if (clearOnAction) {
        commentText.value = ''
    }
}
</script>
