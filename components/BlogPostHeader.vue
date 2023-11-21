<template>
    <div class="component-border-horizontal font-jost">
        <div class="relative">
            <div
                class="background"
                :style="{ backgroundImage: `url(${ image })` }"
            ></div>
            <div class="!pt-[200px] relative bg-[linear-gradient(transparent_25%,white_50%)]">
                <div class="m-[20px] absolute z-[1] right-0 top-0 flex">
                    <Back />
                </div>
                <div class="component-padding relative !pb-[10px]">
                    <h1 class="flex mb-[10px]">
                        <span class="text-[38px]">{{ name }}</span>
                    </h1>

                    <Stars :initialRating="rating.average" :postId="postId" />
                </div>
            </div>
        </div>
        <div class="component-padding relative !mt-0 !pt-0">
            <span class="text-[20px] tracking-[1px]">{{ teaser }}</span>
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
    authorName: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: false,
        default: () => ''
    },
    rating: {
        type: Object,
        required: false,
        default: () => null
    }
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
