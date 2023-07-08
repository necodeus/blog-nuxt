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
        <SimpleBar data-simplebar-auto-hide="true" class="component-border-vertical">
          <div class="main">
            <NuxtPage />

            <!-- <div class="component-padding component-border-horizontal" v-if="stackMode">
              <SectionTitle><b>Spotify</b> na żywo</SectionTitle>
              <Spotify />
            </div> -->
          </div>
        </SimpleBar>
        <SimpleBar
          data-simplebar-auto-hide="true"
          class="component-border-vertical"
          v-if="!stackMode"
        >
          <!-- <div class="sidebar">
            <div class="component-padding component-border-horizontal">
              <SectionTitle><b>Spotify</b> na żywo</SectionTitle>
              <Spotify />
            </div>
          </div> -->
        </SimpleBar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SimpleBar } from "simplebar-vue3";
import "simplebar/dist/simplebar.min.css";

// import { usePlayerStore } from "./store/player";
// const playerStore = usePlayerStore();

// let { data } = await useFetch("/api/spotify/player");
// playerStore.updateCurrentPlayer(data);

let stackMode = ref(false);

const setProperMode = (width = 900) => {
  if (window.innerWidth <= width) {
    stackMode.value = true;
  } else {
    stackMode.value = false;
  }
};

onMounted(() => {
  if (!process.client) {
    return;
  }

  window?.addEventListener("resize", () => {
    setProperMode(900);
  });

  setProperMode(900);
});
</script>
