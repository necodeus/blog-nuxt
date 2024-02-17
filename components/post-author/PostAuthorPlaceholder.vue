<template>
    <div class="font-jost flex items-center text-[20px] p-[24px] bg-[#eee] rounded-[7px]">
        <div
            class="mobile-photo min-w-[55px] max-w-[55px] min-h-[55px] max-h-[55px] bg-cover bg-center !rounded-[50%] bg-[#eee] animated-background"
        ></div>
        <div class="ml-[20px]">
            <div class="font-medium inline-block animated-background">
                necodeus
            </div>
            <div class="mt-[2px] animated-background">
                Software Developer @ necodeo.com
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes placeHolderShimmer {
    0% {
        background-position: -800px 0;
    }

    100% {
        background-position: 800px 0;
    }
}

.animated-background {
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #ddd 8%, #fff 18%, #ddd 33%);
    background-size: 800px 104px;
    position: relative;
    background-color: #ddd;
    border-radius: 4px;
    color: transparent;
}
</style>
