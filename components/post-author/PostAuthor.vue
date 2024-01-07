<template>
    <div class="flex items-center text-[20px]">
        <div
            class="mobile-photo min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] bg-cover bg-center !rounded-[50%] bg-[#eee]"
            :style="`background-image: url(${IMAGES_URL}/${profile.image_id_avatar})`"
        ></div>
        <div class="ml-[20px] pr-[20px]">
            <div class="tracking-[1px] font-medium inline-block">
                {{ profile.display_name }}
            </div>
            <div class="mobile-description" v-if="!descriptionBelow">
                {{ profile.bio }}
            </div>
        </div>
    </div>
    <div class="mobile-description text-[20px]" v-if="descriptionBelow">
        {{ profile.bio }}
    </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
const IMAGES_URL = config.public.IMAGES_URL

defineProps({
    profile: {
        type: Object,
        required: true,
    },
    descriptionBelow: {
        type: Boolean,
        default: false,
        required: false,
    },
})
</script>

<style scoped>
@media (max-width: 900px) {
    .mobile-photo {
        min-width: 35px !important;
        max-width: 35px !important;
        min-height: 35px !important;
        max-height: 35px !important;
    }
}

.mobile-description {
    margin-top: 5px;
}

@media (max-width: 500px) {
    .mobile-description {
        margin-top: 10px !important;
    }
}

@media (max-width: 900px) {
    .mobile-description {
        margin-top: 20px !important;
    }
}
</style>
