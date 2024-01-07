<template>
    <div class="text-[15px] px-3 py-2 bg-[#fbfbfb] [border-left:1px_solid_#eee] mt-1 rounded-[7px]">
        <div class="flex mb-1">
            <div
                class="min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px] bg-cover bg-center !rounded-[50%] bg-[#eee] mr-2">
                <picture>
                    <source media="(min-width: 768px)" :srcset="getGravatarURL(reply.author_name, 20)" />
                    <img width="20px" height="20px" :src="getGravatarURL(reply.author_name, 20)"
                        class="rounded-[50%]" loading="lazy" />
                </picture>
            </div>
            <div class="flex items-center">
                <div class="flex items-center font-medium">
                    {{ reply.author_name }}
                </div>
                <div class="div-separator"></div>
                <div class="flex items-center">
                    {{ moment(reply.created_at).fromNow() }}
                </div>
            </div>
        </div>
        <div class="mb-1">{{ reply.content }}</div>
        <div class="flex items-center">
            <button class="flex items-center" v-on:click.prevent="() => { actionHandler({ action: 'UPVOTE', postId, commentId: reply.id }) }">
                <LikeButton class="mr-[5px] w-[16px] h-[16px]" :is-active="reply.action?.value === 1" />
                {{ reply.upvotes }}
            </button>

            <div class="div-separator"></div>

            <button class="flex items-center" v-on:click.prevent="() => { actionHandler({ action: 'DOWNVOTE', postId, commentId: reply.id }) }">
                <DislikeButton class="mr-[5px] w-[16px] h-[16px]" :is-active="reply.action?.value === -1" />
                {{ reply.downvotes }}
            </button>
        </div>
    </div>
</template>

<script setup>
import moment from "moment/min/moment-with-locales"
moment.locale("pl")

import sha256 from 'js-sha256'

function getGravatarURL(name, size = 40) {
    const lowercaseName = String(name).trim().toLowerCase()

    const hash = sha256(lowercaseName)

    return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon&r=g`
}

defineProps({
    postId: {
        type: String,
        required: true,
    },
    reply: {
        type: Object,
        required: true,
    },
    actionHandler: {
        type: Function,
        required: true,
    },
});
</script>

<style scoped>
.div-separator {
    background-color: #b3b3b3;
    border-radius: 999px;
    width: 3px;
    height: 3px;
    margin: 0 10px;
    display: flex;
}
</style>
