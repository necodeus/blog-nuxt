<template>
    <div class="mb-2">
        {{ content }}
    </div>
</template>

<script setup>
defineProps({
    content: {
        type: String,
        required: true,
    },
})
</script>
