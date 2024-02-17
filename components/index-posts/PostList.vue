<template>
    <ul class="font-jost inline-flex flex-col">
        <li class="list relative" v-for="post in posts" v-bind:key="post.id">
            <div class="flex items-center">
                <picture>
                    <img 
                        :src="post?.author_avatar_url"
                        loading="lazy"
                        class="min-w-[25px] max-w-[25px] min-h-[25px] max-h-[25px] bg-cover bg-center !rounded-[50%] bg-[#eee] object-cover"
                    />
                </picture>
                <span class="ml-[10px] text-[16px]"><b class="font-semibold">{{ post?.author_name }}</b></span>
                <div class="div-separator"></div>
                <span class="text-[16px]">{{ moment(post.modified_at).fromNow() }}</span>
            </div>

            <h1 class="flex mt-[10px]">
                <span class="text-[38px]">{{ post.title }}</span>
            </h1>

            <NuxtLink :to="post.slug" class="w-full h-full top-0 bottom-0 right-0 left-0 absolute"></NuxtLink>
        </li>
    </ul>
</template>

<script setup>
import moment from "moment/min/moment-with-locales"
moment.locale("pl")

defineProps({
    posts: {
        default: () => [],
        required: true,
    },
})
</script>

<style styled>
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
