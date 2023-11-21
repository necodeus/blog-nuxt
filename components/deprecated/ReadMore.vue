<script lang="ts" setup>
defineProps({
    url: {
        type: String,
    },
})
</script>

<template>
    <NuxtLink
        v-if="url"
        :to="url"
        class="hover:shadow-[0_0_0_4px_white,6px_6px_0_0_black] text-[11px] tracking-[4px] font-bold bg-[white] uppercase shadow-[0px_0px_0px_4px_white] mx-0 px-5 py-[15px] border-2 border-solid border-black"
    >
        Czytaj więcej
    </NuxtLink>
    <button
        v-else
        disabled
        class="opacity-50 cursor-default text-[11px] tracking-[4px] font-bold bg-[white] uppercase shadow-[0px_0px_0px_4px_white] mx-0 px-5 py-[15px] border-2 border-solid border-black"
    >
        Czytaj więcej
    </button>
</template>
