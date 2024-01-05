<template>
    <div class="container">
        <div class="wrapper">
            <div class="w-[384px] p-[7px] box-content">
                <Advertisement v-if="!isMobile" />
            </div>
            <simplebar data-simplebar-auto-hide="false" class="component-border-vertical">
                <div class="main">
                    <NuxtPage />
                    <OtherPosts v-if="isMobile && !isHomePage" />
                    <ExternalLinks v-if="isMobile" />
                </div>
            </simplebar>
            <simplebar data-simplebar-auto-hide="false" class="component-border-vertical" v-if="!isMobile">
                <div class="sidebar">
                    <OtherPosts v-if="!isHomePage" />
                    <ExternalLinks />
                </div>
            </simplebar>
        </div>
    </div>
</template>

<script setup>
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

let isMobile = ref(false);

const router = useRouter();

const isHomePage = computed(() => {
    console.log(router.currentRoute.value.path);

    return router.currentRoute.value.path === "/";
});

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
