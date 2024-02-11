<template>
  <div>
    <div class="mx-[30px] mt-[15px]">
      <div class="mb-2 flex">
        <div class="min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] bg-cover bg-center !rounded-full mr-3">
          <span class="animated-background block min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] !rounded-full"></span>
        </div>
        <div class="flex items-center">
          <div class="flex items-center">
            <div class="flex items-center font-medium animated-background !text-[#ccc] px-[5px]">TimeTravel_0</div>
          </div>

          <div class="div-separator"></div>

          <div class="flex items-center placeholder-components animated-background !text-[#ccc] px-[5px]">2036-01-01</div>
        </div>
      </div>

      <CommentContentPlaceholder />
      
      <CommentActionsPlaceholder />
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
