<template>
    <Head>
        <Meta name="theme-color" content="#fff" />
    </Head>
    <div class="wrapper">
        <div></div>
        <div>
            <simplebar class="component-border-vertical h-full">
                <NuxtPage />
            </simplebar>
        </div>
        <div>
            <simplebar class="component-border-vertical h-full">
                <OtherPosts v-if="!isHomePage" />
                <ExternalLinks />
            </simplebar>
        </div>
    </div>
</template>

<script setup>
import simplebar from "simplebar-vue"
import "simplebar/dist/simplebar.min.css"

const router = useRouter()

const isHomePage = computed(() => router.currentRoute.value.path === "/")
</script>
