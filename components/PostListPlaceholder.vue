<template>
    <ul class="font-jost">
        <li style="margin: 5px" class="block p-[40px]" v-for="p in repeats" :key="p">
            <h1 class="flex mb-[40px]">
                <span class="text-[38px] animated-background">Mauris sed pulvinar ipsum.</span>
            </h1>

            <div class="flex items-center mt-[40px]">
                <div class="text-[16px] animated-background">Anonim</div>
                <div class="text-[16px] animated-background ml-[5px]">nieznany czas temu</div>
            </div>

            <div class="flex my-[10px]">
                <span class="text-[22px] tracking-[1px] animated-background">Neque eos at et non aut. Aut sed qui rerum.</span>
            </div>
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

<style>
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
</style>
