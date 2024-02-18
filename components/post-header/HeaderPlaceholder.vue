<template>
    <div class="component-border-top font-jost">
        <div class="relative">
            <div class="bg-[linear-gradient(transparent_25%,white_50%)]">

            </div>
            <div class="!pt-[330px] relative bg-[linear-gradient(transparent_50%,white_100%)]">
                <div class="m-[20px] absolute z-[1] right-0 top-0 flex">
                    <Back />
                </div>
                <div class="component-padding relative !py-0 flex items-center mb-[10px]">
                    <div class="animated-background min-w-[25px] max-w-[25px] min-h-[25px] max-h-[25px] bg-cover bg-center !rounded-[50%] bg-[#eee]"></div>
                    <div class="ml-[10px] font-medium animated-background text-[transparent]">
                        {{ authorName }}
                    </div>

                    <div class="div-separator"></div>

                    <div class="animated-background text-[transparent]">
                        {{ moment(timeAgo).fromNow() }}
                    </div>
                </div>
                <div class="component-padding relative !py-0">
                    <h1 class="flex animated-background text-[transparent]">
                        <span class="text-[38px]">{{ name }}</span>
                    </h1>
                </div>
            </div>
        </div>
        <div class="component-padding relative !pt-[10px] bg-white">
            <div class="flex items-center mb-[10px]">
                <Stars
                    :initialRating="0"
                    :postId="''"
                />
                <div class="div-separator"></div>
                <div class="animated-background text-[transparent] font-medium w-[100px]">{{ numberOfComments }} komentarzy</div>
            </div>
            <span class="text-[20px] animated-background text-[transparent] leading-[35px]">{{ teaser }}</span>
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
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    numberOfComments: {
        type: Number,
        required: true
    },
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
