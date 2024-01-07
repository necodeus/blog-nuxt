<template>
  <Head v-if="!pendingPost">
    <Title>{{ data?.post?.title }} - blog.necodeo.com</Title>
    <Meta name="description" :content="data?.post?.teaser" />
  </Head>

  <HeaderPlaceholder
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
  <Header v-else
    :image="data?.post?.main_image_url ?? ''"
    :name="data?.post?.title ?? ''"
    :timeAgo="data?.post?.modified_at ?? ''"
    :teaser="data?.post?.teaser ?? ''"
    :authorName="data?.postAuthor?.display_name ?? ''"
    :authorPhoto="'https://images.necodeo.com/' + data?.postAuthor?.image_id_avatar ?? ''"
    :postId="data?.post?.id ?? ''"
    :averageRating="data?.post?.rating_average ?? 0"
    :numberOfComments="data?.post?.comments_count"
  />

  <ContentPlaceholder v-if="pendingPost" />
  <Content v-else :content="data?.post?.content ?? ''" />

  <div class="component-border-horizontal font-jost p-[30px]" v-if="!pendingPost && data?.postAuthor">
    <PostAuthorFilled :profile="data.postAuthor" />
  </div>

  <Comments id="comments" :postId="data?.post?.id" />
</template>

<script lang="ts" setup>
import moment from "moment/min/moment-with-locales"
moment.locale("pl")

definePageMeta({
    middleware: ['links'],
})

const route = useRoute()

const { data, pending: pendingPost } = useFetch<any>(`/api/posts/${route.meta.content_id}`)

import { useGlobalStore } from '../store/global'
const { getConnection } = useGlobalStore()

onMounted(() => {
  const connection = getConnection()

  if (!connection) {
    return
  }

  connection.onopen = () => {
    connection.send(JSON.stringify({
      type: 'GET_POST_RATING',
      postId: route.meta.content_id,
    }))
  }

  if (connection.readyState === WebSocket.OPEN) {
    connection.send(JSON.stringify({
      type: 'GET_POST_RATING',
      postId: route.meta.content_id,
    }))
  }
})

const router = useRouter()

watch(router.currentRoute, () => {
  if (route.hash === '#comments') {
    window.location.hash = ''

    const comments = document.getElementById('comments')

    if (!comments) {
      return
    }

    const simpleContentWrapper = document.querySelector('.simplebar-content-wrapper')

    if (!simpleContentWrapper) {
      return
    }

    simpleContentWrapper.scrollTo({
      top: comments.offsetTop,
      behavior: 'smooth',
    })
  }
}, {
  immediate: true,
})
</script>
