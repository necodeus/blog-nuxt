<template>
    <section class="sticky top-0" :style="{ width, background }">
        <slot></slot>
    </section>
</template>

<script setup>
defineProps({
    width: {
        type: String,
        default: 'auto',
    },
    background: {
        type: String,
        default: 'none',
    },
})
</script>
