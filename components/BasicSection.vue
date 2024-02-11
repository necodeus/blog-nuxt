<template>
    <section class="component-border-top" :style="{ width, minWidth: width, background }">
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
