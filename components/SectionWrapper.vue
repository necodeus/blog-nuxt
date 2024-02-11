<template>
    <div class="flex">
        <div class="desktop flex flex-col items-end component-border-top" :style="{ width, minWidth: width }">
            <slot name="aside"></slot>
        </div>
        <div class="w-full">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    width: {
        type: String,
        default: 'auto',
    },
})
</script>
