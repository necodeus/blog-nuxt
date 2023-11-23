<template>
    <div
        class="c-content text-[20px] font-jost relative border-b-[1px] border-solid border-[#eee]"
        v-html="convertMarkdownToHTML(content)"
    ></div>
</template>

<script setup>
import MarkdownIt from 'markdown-it'

import hljs from 'highlight.js'
import 'highlight.js/styles/a11y-dark.css'

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
})

const convertMarkdownToHTML = (content) => md.render(content);

defineProps({
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

.c-content pre.hljs {
    padding: 42px 21px;
    margin: 7px;
    overflow: auto;
    border-radius: 14px;
}

.c-content pre.hljs code,
.c-content pre code * {
    font-family: Consolas, Monaco, monospace;
    font-size: 12px;
}

.c-content h2 {
    font-size: 30px;
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

.c-content blockquote p {
    margin: 0;
}

.c-content blockquote {
    background-color: #c4c4c41a;
    border-radius: 14px;
    font-style: italic;
    margin: 7px;
    padding: 42px 21px;
    color: #575757;
}

.c-content blockquote p:last-child {
    margin-top: 28px;
    font-weight: 500;
}
</style>
