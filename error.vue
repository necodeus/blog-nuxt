<template>
    <Head>
        <Meta name="theme-color" content="#fff" />
    </Head>
    <div class="wrapper">
        <div></div>
        <div>
            <simplebar class="component-border-vertical h-full">
                <ErrorHeader :code="error?.statusCode" :message="error?.message" />
            </simplebar>
        </div>
        <div>
            <simplebar class="component-border-vertical h-full">
                <OtherPosts />
                <ExternalLinks />
            </simplebar>
        </div>
    </div>
</template>

<script setup>
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'

defineProps({
    error: {
        type: Object,
        required: true,
    },
})
</script>
