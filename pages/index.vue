<script setup>
const { data, pending: pendingPosts } = useFetch(`/api/posts`, {
  transform: (data) => {
    return data?.data;
  }
});

onMounted(() => {
  const scroll = document.querySelector(".simplebar-content-wrapper");
  scroll?.scrollTo(0, 0);
});

definePageMeta({
  middleware: [],
})
</script>

<template>
  <Head v-if="!pendingPosts">
    <Title>Blog - blog.necodeo.com</Title>
    <Meta name="description" content="Blog" />
  </Head>

  <section class="component-padding component-border-horizontal" style="margin: 0; padding: 0;">
    <BlogPostsListLoading :repeats="10" v-if="pendingPosts || !data?.posts?.length" />
    <BlogPostsList v-else :posts="data?.posts" />
  </section>
</template>
