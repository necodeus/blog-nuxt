<template>
    <Head>
        <Meta name="theme-color" content="#fff" />
    </Head>

    <MainContainer>
        <SectionWrapper width="var(--desktop-main-content-width)">
            <BasicSection width="var(--main-width)" class="component-border-vertical lg:h-[100vh]">
                <ErrorHeader :code="error?.statusCode" :message="error?.message" />
            </BasicSection>
        </SectionWrapper>
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
defineProps({
    error: {
        type: Object,
        required: true,
    },
})
</script>
