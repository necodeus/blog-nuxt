<template>
    <div class="mb-2 mt-1">
        <div class="flex items-center">
            <button class="flex items-center">
              <div class="animated-background-2 font-medium">
                <LikeButton class="mr-[5px] w-[18px] h-[18px] text-[#ccc]" :is-active="false" />
                <div class="text-[#ccc]">?</div>
              </div>
            </button>
            <div class="div-separator"></div>
            <button class="flex items-center">
              <div class="animated-background-2 font-medium">
                <DislikeButton class="mr-[5px] w-[18px] h-[18px] text-[#ccc]" :is-active="false" />
                <div class="text-[#ccc]">?</div>
              </div>
            </button>
            <div class="div-separator"></div>
            <button class="flex items-center">
              <div class="animated-background-2 font-medium">
                <RepliesButton class="mr-[5px] w-[18px] h-[18px] text-[#ccc]" :is-active="false" />
                <div class="text-[#ccc]">?</div>
              </div>
              
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

.animated-background-2 {
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
  display: flex;
  padding: 0 5px;
  align-items: center;
}
</style>