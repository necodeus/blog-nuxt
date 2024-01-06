<template>
    <ul class="font-jost">
        <li class="block relative p-[30px] m-[5px]" v-for="(post, p) in posts" v-bind:key="p">
            <h1 class="flex mb-[30px]">
                <span class="text-[38px]">{{ post.title }}</span>
            </h1>

            <div class="flex items-center mt-[30px]">
                <span class="text-[16px]"><b class="font-semibold">Dawid</b></span>
                <span class="text-[16px]">, {{ moment(post.created_at).fromNow() }}</span>
            </div>

            <NuxtLink :to="post.slug" class="w-full h-full top-0 bottom-0 right-0 left-0 absolute"></NuxtLink>
        </li>
    </ul>
</template>

<script setup>
import moment from "moment/min/moment-with-locales";
moment.locale("pl");

defineProps({
    posts: {
        default: () => [],
        required: true,
    },
})
</script>
