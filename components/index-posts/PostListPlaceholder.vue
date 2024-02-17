<template>
    <ul class="font-jost inline-flex flex-col">
        <li class="list relative" v-for="p in repeats" :key="p">
            <div class="flex items-center">
                <div class="min-w-[25px] max-w-[25px] min-h-[25px] max-h-[25px] bg-cover bg-center !rounded-[50%] bg-[#eee] object-cover"></div>
                <div class="ml-[10px] text-[16px] animated-background"><b class="font-semibold">John Doe</b></div>
                <div class="div-separator"></div>
                <div class="text-[16px] animated-background">nieznany czas temu</div>
            </div>
            <h1 class="flex mt-[10px]">
                <span class="text-[38px] animated-background">Mauris sed pulvinar ipsum</span>
            </h1>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    repeats: {
        type: Number,
        required: false,
        default: 0,
    },
})
</script>

<style scoped>
@keyframes placeHolderShimmer {
    0% {
        background-position: -800px 0
    }
    100% {
        background-position: 800px 0
    }
}

.animated-background {
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #eee 8%, #fff 18%, #eee 33%);
    background-size: 800px 104px;
    position: relative;
    background-color: #eee;
    border-radius: 4px;
    color: transparent;
    display: inline-block !important;
}

.list:not(:last-child) {
    margin-bottom: 30px;
}

.div-separator {
    background-color: black;
    border-radius: 999px;
    width: 3px;
    height: 3px;
    min-width: 3px;
    min-height: 3px;
    max-width: 3px;
    max-height: 3px;
    margin: 0 10px;
    display: flex;
    opacity: 0.5;
}
</style>
