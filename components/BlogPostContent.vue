<template>
    <div
        class="c-content text-[20px] font-jost relative border-b-[1px] border-solid border-[#eee]"
        v-html="convertMarkdownToHTML(content)"
    ></div>
</template>

<script setup>
import MarkdownIt from 'markdown-it'

import highlightLines from '../plugins/markdown-it/highlight-lines'
import codetabs from '../plugins/markdown-it/codetabs'
import taskLists from '../plugins/markdown-it/task-lists'
import anchor from '../plugins/markdown-it/anchor'
import emoji from '../plugins/markdown-it/emoji'

import hljs from 'highlight.js'

import 'highlight.js/styles/atom-one-dark-reasonable.css'

const md = new MarkdownIt({
  highlight: function (str, lang) {
    const code = hljs.highlight(str, {
        language: lang,
        ignoreIllegals: true,
    }).value

    return `<pre class="hljs icon-${lang}"><code>${code}</code></pre>`
  }
})
    .use(highlightLines)
    .use(codetabs)
    .use(taskLists)
    .use(anchor)
    .use(emoji)

const convertMarkdownToHTML = (content) => md.render(content);

defineProps({
    content: {
        type: String,
        required: true,
    },
})
</script>

<style>
.c-content table,
.c-content :not(.code-tabs) ul,
.c-content .contains-task-list,
.c-content ol,
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

.c-content > ul {
    margin: 30px;
}

.c-content h2 {
    font-weight: 400;
    font-size: 38px;

    &::before {
        content: '# ';
        position: absolute;
        transform: scale(2.0);
        left: 0px;
        font-weight: 400;
        z-index: -1;
        color: #c4c4c41a;
        color: #ececec;
    }
}

.c-content .markdown-alert {
    padding: 1em;
    border-left: 0.25rem solid;
    padding-bottom: 0px;
    padding-top: 0px;
    border-color: var(--border-color);
}

.c-content .markdown-alert > span {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--border-color);
}

.c-content .markdown-alert .markdown-alert-icon {
    margin-right: 0.5em;
    fill: var(--border-color);
}

.c-content .markdown-alert.note {
    --border-color: #539BF5;
}

.c-content .markdown-alert.warning {
    --border-color: #C69026;
}

.c-content .markdown-alert.important {
    --border-color: #986EE2;
}

.c-content .markdown-alert.caution {
    --border-color: #E5534B;
}

.c-content .markdown-alert.tip {
    --border-color: #57AB5A;
}

.c-content p {
    line-height: 35px;
}

.c-content p + p {
    margin-top: 0;
}

.c-content a {
    color: #7400ff;
}

.c-content ul:not(.contains-task-list) li::before {
    content: '— ';
}

.c-content .code-tabs {
    pre, input {
        display: none;
    }

    input:checked + pre {
        display: block;
    }

    label {
        color: rgba(0, 0, 0, 0.5);
    }

    input:checked + label {
        color: black;
        font-weight: 500;
    }

    ul {
        font-size: 0;
        padding: 0;
        white-space: nowrap;
        overflow: auto;
        user-select: none;
        margin: 0 30px;
    }

    li {
        list-style: none;
        display: inline-block;
    }

    label {
        cursor: pointer;
        user-select: none;
        display: inline-block;
        padding: 2px 5px;
        margin: 5px;
        font-size: 14px;
    }

    li ~ li::before {
        content: "";
        height: 12px;
        width: 1px;
        background: rgba(191, 191, 191, 1);
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}

.c-content pre.hljs {
    margin: 7px;
    border-radius: 14px;
    position: relative;
    overflow: hidden;

    &.icon-py::before {
        content: '';
        background: url(/uploads/python.png);
        position: absolute;
        top: 42px;
        right: 0;
        width: 100%;
        height: 100%;
        display: block;
        background-size: auto 120px;
        background-repeat: no-repeat;
        background-position-y: top;
        background-position-x: calc(100% + 20px);
        opacity: 0.15;
    }

    &.icon-go::before {
        content: '';
        background: url(/uploads/go.png);
        position: absolute;
        top: 42px;
        right: 0;
        width: 100%;
        height: 100%;
        display: block;
        background-size: auto 120px;
        background-repeat: no-repeat;
        background-position-y: top;
        background-position-x: calc(100% + 20px);
        opacity: 0.15;
    }

    &.icon-c::before {
        content: '';
        background: url(/uploads/c.png);
        position: absolute;
        top: 42px;
        right: 0;
        width: 100%;
        height: 100%;
        display: block;
        background-size: auto 120px;
        background-repeat: no-repeat;
        background-position-y: top;
        background-position-x: calc(100% + 20px);
        opacity: 0.15;
    }

    &.icon-cpp::before {
        content: '';
        background: url(/uploads/cpp.png);
        position: absolute;
        top: 42px;
        right: 0;
        width: 100%;
        height: 100%;
        display: block;
        background-size: auto 120px;
        background-repeat: no-repeat;
        background-position-y: top;
        background-position-x: calc(100% + 20px);
        opacity: 0.15;
    }

    code {
        display: block;
        font-family: Consolas, Monaco, monospace;
        font-size: 14px;
        padding: 42px 21px;
        overflow-x: auto;
        z-index: 1;
        position: relative;

        .highlighted-line {
            display: block;
            position: relative;

            &::before {
                content: '';
                background-color: rgba(200, 200, 200, 0.1);
                position: absolute;
                width: 100%;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                z-index: 1;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }
    }
}

.c-content blockquote {
    margin: 0;
    background-color: #c4c4c41a;
    border-radius: 14px;
    font-style: italic;
    margin: 7px;
    padding: 42px 21px;
    position: relative;

    p {
        margin: 0;
    }

    p:last-child {
        margin-top: 28px;
        font-weight: 500;
        font-size: 16px;

        &::before {
            content: '— ';
        }
    }

    &::before {
        content: '„';
        position: absolute;
        bottom: -40px;
        left: 27px;
        display: block;
        font-size: 100px;
        font-family: monospace;
        color: #ececec;
    }

    &::after {
        content: '”';
        position: absolute;
        top: -55px;
        right: 27px;
        display: block;
        font-size: 100px;
        font-family: monospace;
        color: #ececec;
    }
}
</style>
