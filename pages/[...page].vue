<template>
  <Head v-if="!pendingPost && data?.post?.id">
    <Title>{{ data?.post?.title }} - blog.necodeo.com</Title>
    <Meta name="description" :content="data?.post?.teaser" />
  </Head>

  <SectionWrapper width="var(--desktop-main-content-width)" v-observe-visibility="topAdVisible">
    <template #aside>
      <StickySection width="334px">
        <div class="background m-[7px]">
          <Advertisement v-if="isTopAdVisible" />
        </div>
      </StickySection>
    </template>

    <!-- <BasicSection width="var(--main-width)" class="not-desktop">
      TabletAdv
    </BasicSection> -->

    <BasicSection width="var(--main-width)" class="component-border-vertical">
      <div>
        <Header
          v-if="!pendingPost && data?.post?.id"
          :image="data?.post?.main_image_url ?? ''"
          :name="data?.post?.title ?? ''"
          :timeAgo="data?.post?.modified_at ?? ''"
          :teaser="data?.post?.teaser ?? ''"
          :authorName="data?.postAuthor?.display_name ?? ''"
          :authorPhoto="'https://images.necodeo.com/' + data?.postAuthor?.image_id_avatar ?? ''"
          :postId="data?.post?.id ?? ''"
          :numberOfComments="data?.post?.comments_count"
        />
        <HeaderPlaceholder
          v-else
          image=""
          name="Aliquam erat volutpat"
          timeAgo="2024-01-01 03:37:37"
          teaser="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultrices, nisl nisl ultricies nisl, nec ultricies"
          authorName="John Doe"
          authorPhoto=""
          postId=""
          :numberOfComments="0"
        />
      </div>
    </BasicSection>
  </SectionWrapper>

  <SectionWrapper width="var(--desktop-main-content-width)">
    <template #aside>
      <StickySection width="334px">
        <div class="m-[7px]">
          <ContentNav :items="extractMarkdownHeadersWithIds(data?.post?.content ?? '')"/>
        </div>
      </StickySection>
    </template>

    <BasicSection width="var(--main-width)" class="not-desktop" v-if="extractMarkdownHeadersWithIds(data?.post?.content ?? '').length">
      <div class="m-[7px]">
        <ContentNav :items="extractMarkdownHeadersWithIds(data?.post?.content ?? '')"/>
      </div>
    </BasicSection>

    <BasicSection width="var(--main-width)" class="component-border-vertical">
      <Content v-if="!pendingPost && data?.post?.id" :content="data?.post?.content ?? ''" />
      <ContentPlaceholder v-else />
      <div class="component-border-top font-jost p-[30px]">
        <PostAuthor v-if="!pendingPost && data?.post?.id" :profile="data.postAuthor" />
        <PostAuthorPlaceholder v-else />
      </div>
    </BasicSection>
  </SectionWrapper>

  <SectionWrapper width="var(--desktop-main-content-width)" v-observe-visibility="bottomAdVisible">
    <template #aside>
      <StickySection width="334px">
        <div class="m-[7px]">
          <Advertisement v-if="isBottomAdVisible" />
        </div>
      </StickySection>
    </template>

    <BasicSection width="var(--main-width)" class="component-border-vertical">
      <Comments id="comments" :postId="data?.post?.id" />
    </BasicSection>
  </SectionWrapper>
</template>

<script lang="ts" setup>
import moment from "moment/min/moment-with-locales"
moment.locale("pl")

definePageMeta({
    middleware: ['links'],
})

const route = useRoute()

const isBottomAdVisible = ref(false)
const isTopAdVisible = ref(false)

const topAdVisible = (isVisible: boolean, disconnectObserver: () => void) => {
  if (isVisible) {
    isTopAdVisible.value = true
    return
  }
}

const bottomAdVisible = (isVisible: boolean, disconnectObserver: () => void) => {
  if (isVisible) {
    isBottomAdVisible.value = true
    return
  }
}

const { data, pending: pendingPost } = useFetch<any>(`/api/posts/${route.meta.content_id}`)

function extractMarkdownHeadersWithIds(markdownText: any) {
  const cleanedMarkdownText = markdownText.replace(/```[\s\S]*?```/g, '');

  return [...cleanedMarkdownText.matchAll(/^(#+)\s*(.*)$/gm)].map(match => {
    const title = match[2].trim();
    const id = encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'));
    return { title, id };
  });
}

import { useGlobalStore } from '../store/global'
const { getConnection, reconnect } = useGlobalStore()

onMounted(() => {
  const connection = getConnection()

  if (!connection || connection.readyState !== WebSocket.OPEN) {
    reconnect()
  }

  if (!connection) {
    console.error('Connection failed!')
    return
  }

  connection.send(JSON.stringify({
      type: 'GET_POST_RATING',
      postId: route.meta.content_id,
  }))
  
})

const router = useRouter()

watch(router.currentRoute, () => {
  if (!router.currentRoute.value.hash) {
    return
  }

  router.replace(router.currentRoute.value.path)
}, {
  immediate: true,
})
</script>
