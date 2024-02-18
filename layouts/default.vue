<template>
    <Head>
        <Meta name="theme-color" content="#fff" />
    </Head>

    <MainContainer>
        <NuxtPage />
    </MainContainer>

    <AsideContainer class="component-border-vertical">
        <BasicSection v-if="!isHomePage">
            <OtherPosts />
        </BasicSection>
        <BasicSection>
            <ExternalLinks />
        </BasicSection>
    </AsideContainer>
</template>

<script setup>
const router = useRouter()
const isHomePage = computed(() => router.currentRoute.value.path === "/")
</script>
