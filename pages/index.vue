<template>
  <Head>
    <Title>Blog - blog.necodeo.com</Title>
    <Meta name="description" content="Blog - blog.necodeo.com" />
  </Head>

  <SectionWrapper width="var(--desktop-main-content-width)">
    <BasicSection width="var(--main-width)" class="component-border-vertical lg:h-[100vh]">
      <div class="component-padding">
        <PostList v-if="!pending && data?.posts?.length > 0" :posts="data?.posts" />
        <PostListPlaceholder v-else :repeats="2" />
      </div>
    </BasicSection>
  </SectionWrapper>
</template>

<script setup>
const { data, pending } = useFetch(`/api/posts`)
</script>
