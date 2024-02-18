<template>
    <Head v-if="!pending && data?.post">
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
                    v-if="data?.post?.id"
                    :image="data?.post?.main_image_url ?? ''"
                    :name="data?.post?.title ?? ''"
                    :timeAgo="data?.post?.modified_at ?? ''"
                    :teaser="data?.post?.teaser ?? ''"
                    :authorName="data?.postAuthor?.display_name ?? ''"
                    :authorPhoto="
                        'https://images.necodeo.com/' + data?.postAuthor?.image_id_avatar ??
                        ''
                    "
                    :postId="data?.post?.id ?? ''"
                    :numberOfComments="data?.post?.comments_count"
                />
                <HeaderPlaceholder
                    v-if="!data?.post?.id"
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
                    <ContentNav :items="extractMarkdownHeadersWithIds(data?.post?.content ?? '')" />
                </div>
            </StickySection>
        </template>

        <BasicSection width="var(--main-width)" class="not-desktop" v-if="extractMarkdownHeadersWithIds(data?.post?.content ?? '').length">
            <div class="m-[7px]">
                <ContentNav :items="extractMarkdownHeadersWithIds(data?.post?.content ?? '')" />
            </div>
        </BasicSection>

        <BasicSection width="var(--main-width)" class="component-border-vertical">
            <Content v-if="data?.post?.id" :content="data?.post?.content ?? ''" />
            <ContentPlaceholder v-if="!data?.post?.id" />

            <div class="component-border-top p-[7px]">
                <PostAuthor v-if="data?.post?.id" :profile="data.postAuthor" />
                <PostAuthorPlaceholder v-if="!data?.post?.id" />
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
import { useBlogStore } from "../stores/blogStore"
const blogStore = useBlogStore()

const router = useRouter()

const isBottomAdVisible = ref(false)
const isTopAdVisible = ref(false)

const { data, pending } = useFetch<any>(`/api/_page?path=${router.currentRoute.value.path}`)

const topAdVisible = (isVisible: boolean) => {
    if (isVisible) {
        isTopAdVisible.value = true
    }
};

const bottomAdVisible = (isVisible: boolean) => {
    if (isVisible) {
        isBottomAdVisible.value = true
    }
};

function extractMarkdownHeadersWithIds(markdownText: any) {
    const cleanedMarkdownText = markdownText.replace(/```[\s\S]*?```/g, "")

    return [...cleanedMarkdownText.matchAll(/^(#+)\s*(.*)$/gm)].map((match) => {
        const title = match[2].trim()
        const id = encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))

        return {
            title,
            id,
        }
    });
}

onMounted(async () => {
    if (data?.value?.error) {
        showError({
            statusCode: 404,
            message: 'Strona nie znaleziona',
        });

        return
    }

    await blogStore.init();

    if (data.value?.post?.id) {
        blogStore.fetchPostRating(data.value?.post?.id)
    }
});

// Handle pending and data changes
watch([pending, data], ([newPending, newData]) => {
    // When data is loaded, fetch post rating
    if (!newPending && newData?.post?.id) {
        blogStore.fetchPostRating(newData?.post?.id)
    }
});

// Handle hash change
watch(
    router.currentRoute,
    () => {
        // Do nothing if there is no hash
        if (!router.currentRoute.value.hash) {
            return
        }

        // When there is a hash, remove it from the URL
        router.replace(router.currentRoute.value.path)
    },
    {
        immediate: true,
    },
)
</script>
