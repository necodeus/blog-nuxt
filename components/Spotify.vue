<template>
    <div v-if="data" v-for="(song, song_index) of data.player" v-bind:key="song_index">
      <div
        style="opacity: 0.5; display: flex; align-items: center; margin-bottom: 30px"
        v-if="song.type === 'history'"
      >
        <div
          :style="{
            width: '60px',
            height: '60px',
            minWidth: '60px',
            minHeight: '60px',
            backgroundColor: 'black',
            backgroundImage: `url(${song?.images[0]?.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            marginRight: '10px',
          }"
        ></div>
        <div style="display: flex; flex-direction: column; justify-column: center">
          <div style="display: flex; align-items: center">
            <div
              style="
                line-height: 1.2;
                font-weight: 700;
                font-size: 10px;
                text-transform: uppercase;
                letter-spacing: 2px;
              "
            >
              {{ moment(song.played_at).fromNow() }}
            </div>
          </div>
          <div>
            <div style="line-height: 1.6; font-weight: 600; font-size: 16px">
              {{ song.name }}
            </div>
            <div style="line-height: 1.2; font-weight: 500; font-size: 14px">
              {{ song.artists }}
            </div>
          </div>
        </div>
      </div>
      <div
        style="display: flex; align-items: center; margin-bottom: 30px"
        v-if="song.type === 'current'"
      >
        <div
          :style="{
            width: '60px',
            height: '60px',
            minWidth: '60px',
            minHeight: '60px',
            backgroundColor: 'black',
            backgroundImage: `url(${song?.images?.slice(-1).pop()?.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            marginRight: '10px',
          }"
        ></div>
        <div style="display: flex; flex-direction: column; justify-column: center">
          <div style="display: flex; align-items: center">
            <div
              style="
                line-height: 1.2;
                font-weight: 700;
                font-size: 10px;
                text-transform: uppercase;
                letter-spacing: 2px;
              "
            >
              Teraz
            </div>
            <div
              style="
                border-radius: 999px;
                background-color: #42a200;
                width: 4px;
                height: 4px;
                margin-left: 5px;
              "
            ></div>
          </div>
          <div>
            <div style="line-height: 1.6; font-weight: 600; font-size: 16px">
              {{ song.name }}
            </div>
            <div style="line-height: 1.2; font-weight: 500; font-size: 14px">
              {{ song.artists }}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { usePlayerStore } from "~/store/player";

import moment from "moment/min/moment-with-locales";
moment.locale("pl");

let data = ref(null);

const playerStore = usePlayerStore();
const { currentPlayerData } = storeToRefs(playerStore);
data = currentPlayerData;

watch(currentPlayerData, () => {
  data = currentPlayerData;
});
</script>
