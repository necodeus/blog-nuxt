<template>
    <div class="back transition-colors hover:scale-[1.02]">
        <NuxtLink 
            to="/"
            class="m-[2px] scale-1 tracking-[4px] text-[11px] font-bold inline-block py-[15px] px-[20px] border-2 border-solid uppercase"
        >Wstecz</NuxtLink>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.back {
    background-color: white;
    border-color: black; /* -- */
    color: black; /* -- */
}
.back:hover {
    background-color: #fff;
    border-color: #fff;
    color: #000;
}
</style>
