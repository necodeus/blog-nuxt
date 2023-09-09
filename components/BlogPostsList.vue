<template>
    <ul class="font-jost">
        <li class="block my-[20px]" v-for="(post, p) in posts" v-bind:key="p">
            <h1 class="flex my-[10px]">
                <span class="text-[38px]">{{ post.title }}</span>
            </h1>

            <div class="flex items-center my-[10px]">
                <span class="text-[17px] font-medium mr-[5px]">Opublikowano</span>
                <span class="text-[17px]">{{ moment(post.createdAt).fromNow() }}</span>
            </div>

            <div class="flex my-[10px]">
                <span class="text-[22px] tracking-[1px]">{{ post.teaser }}</span>
            </div>

            <div class="flex my-[10px] text-[19px] tracking-[1px]">
                <ReadMore :url="post.link?.httpReqUri" />
            </div>
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
