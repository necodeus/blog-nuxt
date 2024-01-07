<template>
  <div v-if="false" v-for="(song, song_index) of []" v-bind:key="song_index">
    <div class="opacity-[0.5] flex items-center mb-[30px]" v-if="song.type === 'history'">
      <div
        class="w-[60px] h-[60px] min-w-[60px] min-h-[60px] bg-[black] bg-center bg-cover mr-[10px]"
        :style="`background-image: url(${song?.images?.[0]?.url})`"
      ></div>
      <div class="flex flex-col justify-center">
        <div class="flex items-center">
          <div class="leading-[1.2] font-bold text-[10px] uppercase tracking-[2px]">
            {{ moment(song.played_at).fromNow() }}
          </div>
        </div>
        <div>
          <div class="leading-[1.6] font-semibold text-[16px]">
            {{ song.name }}
          </div>
          <div class="leading-[1.2] font-medium text-[14px]">
            {{ song.artists }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center mb-[30px]" v-if="song.type === 'current'">
      <div class="w-[60px] h-[60px] min-w-[60px] min-h-[60px] bg-[black] bg-center bg-cover mr-[10px]"
        :style="`background-image: url(${song?.images?.slice(-1).pop()?.url})`"></div>
      <div class="flex flex-col justify-center">
        <div class="flex items-center">
          <div class="leading-[1.2] font-bold text-[10px] uppercase tracking-[2px]">
            Teraz
          </div>
          <div class="rounded-full bg-[#42a200] w-[4px] h-[4px] ml-[5px]"></div>
        </div>
        <div>
          <div class="font-semibold text-[16px] leading-[1.6]">
            {{ song.name }}
          </div>
          <div class="font-medium text-[14px] leading-[1.2]">
            {{ song.artists }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment/min/moment-with-locales"
moment.locale("pl")

defineProps({
  songs: {
    default: () => [],
    required: true,
  },
})
</script>
