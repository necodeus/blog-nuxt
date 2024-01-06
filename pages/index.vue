<template>
  <Head v-if="!pending">
    <Title>Blog - blog.necodeo.com</Title>
    <Meta name="description" content="Blog" />
  </Head>

  <section class="component-padding component-border-horizontal m-0 p-0">
    <PostListPlaceholder v-if="pending" :repeats="1" />
    <PostList v-if="!pending" :posts="data?.posts" />
  </section>
</template>

<script setup>
const { data, pending } = useFetch(`/api/posts`);
</script>
