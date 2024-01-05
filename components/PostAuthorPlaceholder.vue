<template>
    <div class="flex items-center">
        <div
            class="mobile-photo min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] bg-cover bg-center !rounded-[50%] bg-[#eee] animated-background"
            :style="`background-size: 800px 104px`"
        ></div>
        <div class="ml-[20px] pr-[20px]">
            <div class="uppercase text-[20px] tracking-[1px] font-medium animated-background">John Doe</div>
            <div v-if="!descriptionBelow" class="mobile-description text-[17px]">
                <div class="animated-background">{{ description }}</div>
            </div>
        </div>
    </div>
    <div v-if="descriptionBelow" class="mobile-description text-[17px] animated-background">{{ description }}</div>
</template>

<script lang="ts" setup>
defineProps({
    descriptionBelow: {
        type: Boolean,
        default: false,
        required: true,
    },
})

const description = "Nunc dignissim malesuada tincidunt. Morbi ligula lectus, iaculis sit amet ante a, convallis dignissim magna. Morbi aliquet consequat bibendum.";
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

@media (max-width: 900px) {
    .mobile-photo {
        min-width: 35px !important;
        max-width: 35px !important;
        min-height: 35px !important;
        max-height: 35px !important;
    }
}

@media (max-width: 500px) {
    .mobile-description {
        margin-top: 20px !important;
    }
}
</style>
