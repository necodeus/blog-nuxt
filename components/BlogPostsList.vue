<template>
    <ul class="font-jost">
        <li style="margin: 5px" class="block relative p-[40px]" v-for="(post, p) in posts" v-bind:key="p">
            <h1 class="flex mb-[40px]">
                <span class="text-[38px]">{{ post.title }}</span>
            </h1>

            <div class="flex items-center mt-[40px]">
                <span class="text-[16px]"><b style="font-weight: 600">Dawid</b></span>
                <span class="text-[16px]">, {{ moment(post.created_at).fromNow() }}</span>
            </div>

            <NuxtLink :to="post.slug" style="width: 100%; height: 100%; top: 0; bottom: 0; right: 0; left: 0; position: absolute;"></NuxtLink>
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
