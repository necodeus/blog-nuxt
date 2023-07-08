<template>
    <div
        class="c-content text-[20px] font-jost relative border-b-[1px] border-solid border-[#eee]"
        v-html="convertMarkdownToHTML(content)"
    ></div>
</template>

<script lang="ts" setup>
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
const convertMarkdownToHTML = (content: any) => md.render(content);

const props = defineProps({
    content: {
        type: String,
        required: true,
    },
})
</script>

<style>
.c-content blockquote {
    margin: 0;
}

.c-content pre code {
    padding: 23px;
    margin: 7px;
}

.c-content pre code,
.c-content pre code * {
    font-family: Consolas, Monaco, monospace;
    font-size: 12px;
}

.c-content  table,
.c-content ul,
.c-content  ol,
.c-content h1,
.c-content h2,
.c-content h3,
.c-content h4,
.c-content h5,
.c-content p,
.c-content hr,
.c-content dl,
.c-content nav,
.c-content section,
.c-content blockquote {
    margin: 30px;
}

.c-content p {
    line-height: 35px;
}

.c-content  p + p {
    margin-top: 0;
}

.c-content a {
    color: #7400ff;
}
</style>
