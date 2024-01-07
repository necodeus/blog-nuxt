<template>
    <div class="mx-[30px]">
        <SectionTitle>
            <div class="mb-2 flex items-center">
                <!-- TODO: Zmienić na H2 -->
                <b class="font-bold">Komentarze</b>
                <span v-if="commentsCount > 0">&nbsp;({{ commentsCount }})</span>
            </div>
        </SectionTitle>
    </div>
</template>

<script setup>
defineProps({
    commentsCount: {
        type: Number,
        default: null,
    },
})
</script>
