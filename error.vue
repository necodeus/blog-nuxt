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
.container > .wrapper {
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
}
</style>
