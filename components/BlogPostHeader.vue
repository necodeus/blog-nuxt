<template>
    <div class="component-border-horizontal relative font-jost">
        <div
            class="background"
            :style="{ backgroundImage: `url(${ image })` }"
        ></div>
        <div class="m-[20px] absolute z-[1] right-0 flex">
            <Back />
        </div>
        <div class="component-padding relative !pt-[200px] bg-[linear-gradient(transparent_25%,white_50%)]">
            <h1 class="flex mb-[10px]">
                <span class="text-[38px]">{{ name }}</span>
            </h1>

            <div class="flex my-[10px]">
                <span class="text-[22px] tracking-[1px]">{{ teaser }}</span>
            </div>

            <div class="flex mt-[10px]">
                <div class="text-[17px] opacity-50 italic">~ Dawid Smulewicz</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    timeAgo: {
        type: String,
        required: true
    },
    teaser: {
        type: String,
        required: true
    },
})
</script>

<style scoped>
.background {
    background-color: #eee;
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    margin: 7px 7px 0 7px;
}
</style>
