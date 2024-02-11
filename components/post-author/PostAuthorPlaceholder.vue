<template>
    <div class="flex items-center text-[20px]">
        <div
            class="mobile-photo min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] bg-cover bg-center !rounded-[50%] bg-[#eee] animated-background"
        ></div>
        <div class="ml-[20px] pr-[20px]">
            <div class="font-medium inline-block animated-background">
                necodeus
            </div>
            <div class="mobile-description" v-if="!descriptionBelow">
                <div class="animated-background">
                    software development, anime, music, weekend trips
                </div>
            </div>
        </div>
    </div>
    <div class="text-[20px] mobile-description animated-background" v-if="descriptionBelow">
        software development, anime, music, weekend trips
    </div>
</template>

<script lang="ts" setup>
defineProps({
    descriptionBelow: {
        type: Boolean,
        default: false,
        required: false,
    },
})
</script>

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

    background: linear-gradient(to right, #eeeeee 8%, #fff 18%, #eeeeee 33%);
    background-size: 800px 104px;
    position: relative;
    background-color: #eeeeee;
    border-radius: 4px;
    color: transparent;
}

.mobile-description {
    margin-top: 5px;
}

@media (max-width: 500px) {
    .mobile-description {
        margin-top: 10px !important;
    }
}

@media (max-width: 900px) {
    .mobile-description {
        margin-top: 20px !important;
    }
}
</style>

