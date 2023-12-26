<template>
    <div class="component-border-horizontal font-jost py-[30px] text-[17px]" v-observe-visibility="visibilityChanged">
        <div class="mx-[30px]">
            <SectionTitle v-if="isLoading">
                <div class="mb-2 font-bold">Komentarze</div>
            </SectionTitle>
            <SectionTitle v-else>
                <div class="mb-2 flex items-center"><b>Komentarze</b>&nbsp;({{ comments?.data?.comments?.length || 0 }})
                </div>
            </SectionTitle>
        </div>

        <div class="mb-2 mx-[30px]">Dodaj komentarz</div>

        <div class="mb-[30px] mx-[9px]">
            <textarea
                v-model="commentContents['']"
                class="w-full h-[180px] p-[20px] border-[#dfdfdf] border-solid border-[1px] rounded-[14px] resize-none block mb-2"
                placeholder="Treść komentarza"
                @keydown.enter.prevent="() => { submitComment() }"
            ></textarea>

            <div class="flex items-center justify-between flex-col">
                <FormButton :onClick="() => { submitComment() }" />
            </div>
        </div>

        <!-- Comment List Placeholder -->
        <div class="mx-[30px]" v-if="isLoading">
            <div>ID: loading...</div>
            <div>Autor: loading...</div>
            <div>Data utworzenia: loading...</div>
            <div>Reakcje: loading...</div>
            <div>Odpowiedzi: loading...</div>
        </div>

        <!-- Comment List -->
        <div v-else>
            <!-- Comment List When Any -->
            <div class="mx-[30px] mt-[15px]" v-for="comment in comments?.data?.comments" :key="comment.id">
                <div class="mb-2 flex">
                    <div
                        class="min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] bg-cover bg-center !rounded-full bg-[#eee] mr-3">
                        <img width="40px" height="40px" :src="getGravatarURL(comment.author_name, 40)"
                            class="rounded-full" />
                    </div>
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <div class="flex items-center font-medium">{{ comment.author_name }}</div>
                        </div>

                        <div class="div-separator"></div>

                        <div class="flex items-center">
                            {{ moment(comment.created_at).fromNow() }}
                        </div>
                    </div>
                </div>

                <div class="mb-2">{{ comment.content }}</div>

                <div class="mb-2">
                    <div class="flex items-center">
                        <button class="flex items-center" v-on:click.prevent="upvoteCommentById(postId, comment.id)">
                            <LikeButton class="mr-[5px] w-[18px] h-[18px]" :is-active="comment.action?.value === 1" />
                            {{ comment.upvotes }}
                        </button>

                        <div class="div-separator"></div>

                        <button class="flex items-center" v-on:click.prevent="downvoteCommentById(postId, comment.id)">
                            <DislikeButton class="mr-[5px] w-[18px] h-[18px]" :is-active="comment.action?.value === -1" />
                            {{ comment.downvotes }}
                        </button>

                        <div class="div-separator"></div>

                        <button class="flex items-center font-medium" v-on:click.prevent="toggleReply(comment.id)"
                            :style="{ transition: 'opacity 0.15s ease-in-out', opacity: activeReplyCommentId !== comment.id ? 1 : 0.5 }">
                            {{ comment.replies.length }} {{ comment.replies.length === 1 ? 'odpowiedź' : 'odpowiedzi' }}
                        </button>
                    </div>
                </div>

                <div class="text-[15px] px-3 py-2 bg-[#fbfbfb] [border-left:1px_solid_#eee] mt-1 rounded-[7px]"
                    v-for="reply in comment.replies" :key="reply.id" v-if="activeReplyCommentId === comment.id">
                    <div class="flex mb-1">
                        <div
                            class="min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px] bg-cover bg-center !rounded-[50%] bg-[#eee] mr-2">
                            <img width="20px" height="20px" :src="getGravatarURL(reply.author_name, 20)"
                                class="rounded-[50%]" />
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
                        <button class="flex items-center" v-on:click.prevent="upvoteCommentById(postId, reply.id)">
                            <LikeButton class="mr-[5px] w-[16px] h-[16px]" :is-active="reply.action?.value === 1" />
                            {{ reply.upvotes }}
                        </button>

                        <div class="div-separator"></div>

                        <button class="flex items-center" v-on:click.prevent="downvoteCommentById(postId, reply.id)">
                            <DislikeButton class="mr-[5px] w-[16px] h-[16px]" :is-active="reply.action?.value === -1" />
                            {{ reply.downvotes }}
                        </button>
                    </div>
                </div>

                <div class="mt-1 relative" v-if="activeReplyCommentId === comment.id">
                    <input
                        v-model="commentContents[comment.id]"
                        class="w-full pl-[10px] pr-[93.61px] py-[12px] border-[#dfdfdf] border-solid border-[1px] rounded-[7px] resize-none block text-[15px]"
                        placeholder="Treść komentarza"
                        @keydown.enter.prevent="() => { submitComment(comment.id) }"
                    />
                    <button
                        class="rounded-[7px] px-3 text-[15px] absolute right-[4px] bg-[black] top-[4px] bottom-[4px] flex items-center justify-center text-[white]"
                        :onClick="() => { submitComment(comment.id) }">
                        Wyślij

                        <svg style="margin-left: 5px; width: 16px; height: 16px; min-width: 16px; min-height: 16px"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Comment List When Empty -->
            <div class="mx-[30px]" v-if="comments?.data?.comments?.length === 0">
                Do tej pory nikt nie skomentował tego wpisu.
            </div>
        </div>
    </div>
</template>

<script setup>
import moment from "moment/min/moment-with-locales";
moment.locale("pl");

import sha256 from 'js-sha256'

function getGravatarURL(name, size = 40) {
    const lowercaseName = String(name).trim().toLowerCase();

    const hash = sha256(lowercaseName);

    return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon&r=g`;
}

const comments = ref([]);
const commentContents = ref({});
const isLoading = ref(true);

const formAuthorName = ref('anonim');

const activeReplyCommentId = ref(null);

const props = defineProps({
    postId: {
        type: String,
        required: true,
        default: '',
    },
});

const toggleReply = (commentId = null) => {
    if (activeReplyCommentId.value === commentId) {
        activeReplyCommentId.value = null;
    } else {
        activeReplyCommentId.value = commentId;
    }
};

const submitComment = async (commentId = '') => {
    const content = commentContents.value[commentId] || '';

    const response = await fetch(`/api/posts/${props.postId}/comments/${commentId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            author_name: formAuthorName.value,
            content,
        }),
    });

    const data = await response.json();

    console.log(data);
};

const upvoteCommentById = async (postId, commentId) => {
    const response = await fetch(`/api/posts/${postId}/comments/${commentId}/upvote`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    console.log(data);
};

const downvoteCommentById = async (postId, commentId) => {
    const response = await fetch(`/api/posts/${postId}/comments/${commentId}/downvote`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    console.log(data);
};

const visibilityChanged = async (isVisible, disconnectObserver) => {
    if (!isVisible) {
        return;
    }

    const response = fetch(`/api/posts/${props.postId}/comments`);
    const responseAwaited = await response;
    const data = await responseAwaited.json();

    comments.value = data;
    isLoading.value = false;

    disconnectObserver();
};
</script>

<style>
.div-separator {
    background-color: #b3b3b3;
    border-radius: 999px;
    width: 3px;
    height: 3px;
    margin: 0 10px;
    display: flex;
}
</style>
