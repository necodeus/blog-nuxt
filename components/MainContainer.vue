<template>
    <main class="main-container">
        <slot></slot>
    </main>
</template>

<style scoped>
.main-container {
    left: 0;
    position: var(--desktop-main-position);
    width: var(--desktop-main-width);
    height: var(--desktop-main-height);
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
