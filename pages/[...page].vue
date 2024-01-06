<template>
  <Head v-if="!pendingPost">
    <Title>{{ data.post.title }} - blog.necodeo.com</Title>
    <Meta name="description" :content="data.post.teaser" />
  </Head>

  <PostHeaderPlaceholder
    v-if="pendingPost"
    image=""
    name="Aliquam erat volutpat"
    timeAgo="2024-01-01 03:37:37"
    teaser="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultrices, nisl nisl ultricies nisl, nec ultricies"
    authorName="John Doe"
    authorPhoto=""
    postId=""
    :averageRating="0"
    :numberOfComments="0"
  />
  <PostHeader v-else
    :image="data?.post?.main_image_url ?? ''"
    :name="data?.post?.title ?? ''"
    :timeAgo="data?.post?.created_at"
    :teaser="data?.post?.teaser ?? ''"
    :authorName="data?.postAuthor?.display_name ?? ''"
    :authorPhoto="'https://images.necodeo.com/' + data?.postAuthor?.image_id_avatar ?? ''"
    :postId="data?.post?.id ?? ''"
    :averageRating="data?.post?.rating_average ?? 0"
    :numberOfComments="data?.post?.comments_count"
  />

  <PostContentPlaceholder v-if="pendingPost" />
  <PostContent v-else :content="data?.post?.content ?? ''" />

  <div class="component-border-horizontal font-jost p-[30px]" v-if="!pendingPost && data?.postAuthor">
    <PostAuthorFilled :profile="data.postAuthor" />
  </div>

  <!-- <PostComments v-if="!pendingPost" :postId="data?.post?.id" /> -->
</template>

<script setup>
import moment from "moment/min/moment-with-locales";
moment.locale("pl");

definePageMeta({
    middleware: ['links'],
})

const route = useRoute();

const { data, pending: pendingPost } = useFetch(`/api/posts/${route.meta.content_id}`);
</script>
