<template>
    <div class="component-border-horizontal font-jost">
        <div class="relative">
            <picture>
                <source media="(min-width: 768px)" :srcset="image" />
                <img class="background" :src="image" />
            </picture>
            <div class="!pt-[350px] relative bg-[linear-gradient(transparent_50%,white_100%)]">
                <div class="m-[20px] absolute z-[1] right-0 top-0 flex">
                    <Back />
                </div>
                <div class="component-padding relative !py-0">
                    <h1 class="flex">
                        <span class="text-[38px]">{{ name }}</span>
                    </h1>
                </div>
            </div>
        </div>
        <div class="component-padding relative !pt-[10px]" style="background-color: white;">
            <Stars class="mb-[10px]" :initialRating="averageRating" :postId="postId" />
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
    averageRating: {
        type: Number,
        required: false,
        default: () => 0
    }
})
</script>

<style scoped>
.background {
    background-color: #eee;
    background-size: cover;
    background-position: center;
    opacity: 0.6;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    margin: 7px 7px 7px 7px;
    width: calc(100% - 7px * 2);
    height: 100%;
    display: block;
    object-fit: cover;
}
</style>
