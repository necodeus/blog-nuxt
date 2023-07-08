<script setup>
import moment from "moment/min/moment-with-locales";
moment.locale("pl");

definePageMeta({
    middleware: ['links'],
})

const route = useRoute();

const postId = ref(route.meta.link?.data?.content_id);

const { data: post, pending: pendingPost } = useFetch(`/api/posts/${postId.value}`, {
  transform: (data) => data?.data?.data
});

const isProfileVisible = ref(false);

const setProfileVisibility = (v) => {
  isProfileVisible.value = v;
};

onMounted(() => {
  const scroll = document.querySelector(".simplebar-content-wrapper");
  scroll?.scrollTo(0, 0);
});
</script>

<template>
  <Head v-if="!pendingPost">
    <Title>{{ post.title }} - blog.necodeo.com</Title>
    <Meta name="description" :content="post.teaser" />
  </Head>

  <BlogPostHeaderLoading v-if="pendingPost" />
  <BlogPostHeader v-else
    :image="'https://blog.necodeo.com/uploads/backgrounds/01.jpg'"
    :name="post.title"
    :timeAgo="moment(post.creation_dt).fromNow()"
    :teaser="post.teaser"
  />

  <BlogPostContentLoading v-if="pendingPost" />
  <BlogPostContent v-else :content="post.full_content_md" />

  <div v-observe-visibility="{ callback: setProfileVisibility, once: true }">
    <div class="component-border-horizontal font-jost p-[30px]">
      <SectionTitle><b>Więcej</b> o autorze</SectionTitle>
      <BlogPostAuthorFilled :profile="post?.author_profile || {}" />
      <!-- <BlogPostAuthorOnDemand :loadProfile="isProfileVisible" /> -->
    </div>
  </div>
</template>
