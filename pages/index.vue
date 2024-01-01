<template>
  <Head v-if="!pending">
    <Title>Blog - blog.necodeo.com</Title>
    <Meta name="description" content="Blog" />
  </Head>

  <section class="component-padding component-border-horizontal" style="margin: 0; padding: 0;">
    <BlogPostsListLoading v-if="pending" :repeats="5" />
    <BlogPostsList v-if="!pending" :posts="data?.posts" />
  </section>
</template>

<script setup>
const { data, pending } = useFetch(`/api/posts`);

onMounted(() => {
  const scroll = document.querySelector(".simplebar-content-wrapper");
  scroll?.scrollTo(0, 0);
});
</script>
