<template>
  <Head>
    <Meta name="theme-color" content="#fff" />
  </Head>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()

nuxtApp.hook("page:start", () => {
    const simplebarContentWrapper = document.querySelector(".simplebar-content-wrapper")

    if (simplebarContentWrapper) {
        simplebarContentWrapper.scrollTo(0, 0)
    }

    const wrapper = document.querySelector('.wrapper')

    if (wrapper) {
        wrapper.scrollTo(0, 0)
    }
})
</script>
