<template>
    <div class="mb-2 mt-1">
        <div class="flex items-center">
            <button class="flex items-center">
              <span class="animated-background">text text</span>
            </button>

            <div class="div-separator"></div>

            <button class="flex items-center">
                <span class="animated-background">text text</span>
            </button>

            <div class="div-separator"></div>

            <button class="flex items-center font-medium animated-background ">
                0 komentarzy
            </button>
        </div>
    </div>
</template>

<style scoped>
.div-separator {
    background-color: #b3b3b3;
    border-radius: 999px;
    width: 3px;
    height: 3px;
    margin: 0 10px;
    display: flex;
}
@keyframes placeHolderShimmer {
  0% {
    background-position: -800px 0;
  }

  100% {
    background-position: 800px 0;
  }
}

.animated-background {
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;

  background: linear-gradient(to right, #eeeeee 8%, #fff 18%, #eeeeee 33%);
  background-size: 800px 104px;
  position: relative;
  background-color: #eeeeee;
  border-radius: 4px;
  color: transparent;
}
</style>
<script setup lang="ts">
</script>