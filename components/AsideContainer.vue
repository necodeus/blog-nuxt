<template>
    <aside class="aside-container">
        <slot></slot>
    </aside>
</template>

<style scoped>
.aside-container {
    right: 0;
    position: var(--desktop-aside-position);
    width: var(--desktop-aside-width);
    height: var(--desktop-aside-height);
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
