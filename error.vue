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
                <simplebar data-simplebar-auto-hide="true" class="component-border-vertical">
                    <div class="main">
                        <ErrorHeader :code="error.statusCode" :message="error.message" />
                        <!-- <Spotify v-if="stackMode" /> -->
                    </div>
                </simplebar>
                <simplebar data-simplebar-auto-hide="true" class="component-border-vertical" v-if="!stackMode">
                    <div class="sidebar">
                        <!-- <Spotify /> -->
                    </div>
                </simplebar>
            </div>
        </div>
    </div>
</template>

<script setup>
import simplebar from "simplebar-vue";
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
    window?.addEventListener("resize", () => {
        console.log('resize')
        setProperMode(900);
    });

    setProperMode(900);
});

defineProps({
    error: {
        type: Object,
        required: true
    }
})
</script>

<style>
/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2) format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
        U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
        U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

.container>.wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
}

@media (max-width: 1570px) {
    .container>.wrapper>div:nth-child(1) {
        display: none;
    }
}

.container>.wrapper>div:nth-child(2) {
    width: 800px;
}

@media (max-width: 1570px) {
    .container>.wrapper>div:nth-child(2) {
        width: calc(100% - 385px);
    }
}

@media (max-width: 900px) {
    .container>.wrapper>div:nth-child(2) {
        width: 100%;
    }
}

.container>.wrapper>div:nth-child(3) {
    width: calc(50% - 800px / 2);
}

@media (max-width: 1570px) {
    .container>.wrapper>div:nth-child(3) {
        width: 385px;
    }
}

@media (max-width: 900px) {
    .container>.wrapper>div:nth-child(3) {
        display: none;
    }
}

.component-padding {
    padding: 30px;
}

.component-border-vertical {
    border-left: 1px solid #d1d1d1;
}

.component-border-horizontal {
    border-bottom: 1px solid #e1e1e1;
}

.simplebar-scrollbar::before {
    background-color: rgba(0, 0, 0, 0.25);
}

.simplebar-track.simplebar-vertical {
    width: 8px;
}</style>
