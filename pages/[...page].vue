<script setup>
import moment from "moment/min/moment-with-locales";
moment.locale("pl");

definePageMeta({
    middleware: ['links'],
})

const route = useRoute();

const { data, pending: pendingPost } = useFetch(`/api/posts/${route.meta.content_id}`, {
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
    :image="data?.post?.main_image_url ?? ''"
    :name="data?.post?.title ?? ''"
    :timeAgo="moment(data?.post?.created_at).fromNow()"
    :teaser="data?.post?.teaser ?? ''"
    :authorName="data?.postPublisher?.displayName ?? ''"
    :postId="data?.post?.id ?? ''"
    :rating="data?.stars ?? {}"
  />

  <BlogPostContentLoading v-if="pendingPost" />
  <BlogPostContent v-else :content="data?.post?.content ?? ''" />

  <div v-observe-visibility="{ callback: setProfileVisibility, once: true }">
    <div class="component-border-horizontal font-jost p-[30px]">
      <BlogPostAuthorOnDemand :loadProfile="isProfileVisible" />
    </div>
  </div>
</template>
