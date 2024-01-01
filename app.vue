<template>
  <Head>
    <Meta name="theme-color" content="#fff" />
  </Head>
  <div>
    <div class="container">
      <div class="wrapper">
        <div class="w-[384px] p-[7px] box-content">
          <Advertisement />
        </div>
        <simplebar data-simplebar-auto-hide="false" class="component-border-vertical">
          <div class="main">
            <NuxtPage />

            <OtherPosts v-if="isMobile && !isHomePage" />
          </div>
        </simplebar>
        <simplebar
          data-simplebar-auto-hide="false"
          class="component-border-vertical"
          v-if="!isMobile"
        >
          <div class="sidebar">
            <OtherPosts v-if="!isHomePage" />
          </div>
        </simplebar>
      </div>
    </div>
  </div>
</template>

<script setup>
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

let isMobile = ref(false);

const route = useRoute();

const isHomePage = computed(() => route.path === '/');

const setProperMode = (width = 900) => {
  if (window.innerWidth <= width) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
};

onMounted(() => {
  if (!process.client) {
    return;
  }

  window.addEventListener("resize", () => {
    setProperMode(900);
  });

  setProperMode(900);
});
</script>
