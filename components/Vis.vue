<template>
    <div v-observe-visibility="visibilityChanged"></div>
</template>

<script setup>
const visibilityChanged = (isVisible, disconnectObserver) => {
    if (!isVisible) {
        return;
    }

    console.log('Rozpoczynam pobieranie danych...');
    disconnectObserver();
};
</script>
