<template>
    <ul class="font-jost">
        <li class="block my-[20px]" v-for="(post, p) in posts" v-bind:key="p">
            <h1 class="flex my-[10px]">
                <span class="text-[38px]">{{ post.title }}</span>
            </h1>

            <div class="flex items-center my-[10px]">
                <span class="text-[17px] font-medium mr-[5px]">Opublikowano</span>
                <span class="text-[17px]">{{ moment(post.creation_dt).fromNow() }}</span>
            </div>

            <div class="flex my-[10px]">
                <span class="text-[22px] tracking-[1px]">{{ post.teaser }}</span>
            </div>

            <div class="flex my-[10px] text-[19px] tracking-[1px]">
                <ReadMore :url="post.link?.url" />
            </div>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import moment from "moment/min/moment-with-locales";
moment.locale("pl");

type Post = {
    id: String
    title: String
    teaser: String
    full_content_md?: String
    autor_id?: Number
    creation_dt: Date
    modification_dt?: Date
    /* Extra: */
    link: Link
}

type Link = {
    id: Number
    method: String
    url: any
    response: String
    hits: Number
    created_at: Date
    updated_at: Date
}

defineProps({
    posts: {
        type: Array<Post>,
        default: () => [],
        required: true,
    },
})
</script>
