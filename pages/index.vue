<script setup>
const { data: posts, pending: pendingPosts } = useFetch(`/api/posts`, {
  transform: (data) => {
    return data?.data?.data;
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

  <section class="component-padding component-border-horizontal">
    <SectionTitle><b>Lista</b> wpisów</SectionTitle>

    <BlogPostsListLoading v-if="pendingPosts || !posts?.length" :repeats="1" />
    <BlogPostsList v-else :posts="posts" />
  </section>
</template>
