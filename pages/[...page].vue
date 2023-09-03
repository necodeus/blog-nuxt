<script setup>
import moment from "moment/min/moment-with-locales";
moment.locale("pl");

definePageMeta({
    middleware: ['links'],
})

const route = useRoute();

const postId = ref(route.meta.link?.contentId);

const { data, pending: pendingPost } = useFetch(`/api/posts/${postId.value}`, {
  transform: (data) => data?.data
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
    <Title>{{ data.post.title }} - blog.necodeo.com</Title>
    <Meta name="description" :content="data.post.teaser" />
  </Head>

  <BlogPostHeaderLoading v-if="pendingPost" />
  <BlogPostHeader v-else
    :image="data?.post?.mainImageUrl"
    :name="data?.post?.title"
    :timeAgo="moment(data?.post?.createdAt).fromNow()"
    :teaser="data?.post?.teaser"
    :authorName="data?.postPublisher?.displayName"
  />

  <BlogPostContentLoading v-if="pendingPost" />
  <BlogPostContent v-else :content="data?.post?.cachedFragments" />

  <div v-observe-visibility="{ callback: setProfileVisibility, once: true }">
    <div class="component-border-horizontal font-jost p-[30px]">
      <SectionTitle><b>Więcej</b> o autorze</SectionTitle>
      <BlogPostAuthorFilled :profile="data?.postPublisher || {}" />
      <!-- <BlogPostAuthorOnDemand :loadProfile="isProfileVisible" /> -->
    </div>
  </div>
</template>
