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

  <section class="component-padding component-border-horizontal">
    <SectionTitle><b>Lista</b> wpisów</SectionTitle>

    <BlogPostsListLoading v-if="pendingPosts || !data?.posts?.length" :repeats="1" />
    <BlogPostsList v-else :posts="data?.posts" />
  </section>
</template>
