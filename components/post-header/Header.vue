<template>
    <div class="component-border-horizontal font-jost">
        <div class="relative">
            <picture>
                <source media="(min-width: 768px)" :srcset="image" />
                <img class="background" :src="image" loading="lazy" />
            </picture>
            <div class="!pt-[330px] relative bg-[linear-gradient(transparent_50%,white_100%)]">
                <div class="m-[20px] absolute z-[1] right-0 top-0 flex">
                    <Back />
                </div>
                <div class="component-padding relative !py-0 flex items-center mb-[10px]">
                    <picture>
                        <source media="(min-width: 768px)" :srcset="authorPhoto" />
                        <img
                            :src="authorPhoto"
                            loading="lazy"
                            class="min-w-[25px] max-w-[25px] min-h-[25px] max-h-[25px] bg-cover bg-center !rounded-[50%] bg-[#eee] object-cover"
                        />
                    </picture>
                    <div class="ml-[10px] font-medium">
                        {{ authorName }}
                    </div>

                    <div class="div-separator"></div>

                    <div>
                        {{ moment(timeAgo).fromNow() }}
                    </div>
                </div>
                <div class="component-padding relative !py-0">
                    <h1 class="flex">
                        <span class="text-[38px]">{{ name }}</span>
                    </h1>
                </div>
            </div>
        </div>
        <div class="component-padding relative !pt-[10px] bg-white">
            <div class="flex items-center mb-[10px]">
                <Stars :initialRating="averageRating" :postId="postId" />
                <div class="div-separator"></div>
                <NuxtLink :to="{ hash: '#comments' }" class="font-medium">{{ numberOfComments }} komentarzy</NuxtLink>
            </div>
            <span class="text-[20px] tracking-[1px] leading-[35px]">{{ teaser }}</span>
        </div>
    </div>
</template>

<script setup>
import moment from 'moment/min/moment-with-locales'
moment.locale('pl')

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
    authorPhoto: {
        type: String,
        required: false,
        default: () => ''
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
    },
    numberOfComments: {
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
