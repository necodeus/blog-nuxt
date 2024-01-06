<template>
  <Head>
    <Title>Blog - blog.necodeo.com</Title>
    <Meta name="description" content="Blog - blog.necodeo.com" />
  </Head>

  <section class="component-padding component-border-horizontal">
    <PostList v-if="!pending" :posts="data?.posts" />
    <PostListPlaceholder v-else :repeats="2" />
  </section>
</template>

<script setup>
const { data, pending } = useFetch(`/api/posts`);
</script>
