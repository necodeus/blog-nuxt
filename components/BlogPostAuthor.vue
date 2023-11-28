<template>
    <div class="flex items-center mt-2.5">
        <div class="mobile-photo min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] bg-cover bg-center !rounded-[50%] bg-[#eee]"
            :style="`background-image: url(${IMAGES_URL}/${profile.image_id_avatar})`"></div>
        <div class="ml-[20px] pr-[20px]">
            <div class="text-[20px] tracking-[1px] font-medium">{{ profile.display_name }}</div>
            <div v-if="!descriptionBelow" class="mobile-description text-[17px]">
                {{ profile.bio }}
            </div>
        </div>
    </div>
    <div v-if="descriptionBelow" class="mobile-description text-[17px]">
        {{ profile.bio }}
    </div>
    <!-- TODO: dodać do sekcji link "Zobacz inne wpisy tego autora" -->
    <!-- TODO: dodać do sekcji linki do GitHub i LinkedIn -->
</template>

<script setup>
const config = useRuntimeConfig();
const IMAGES_URL = config.public.IMAGES_URL;

defineProps({
    profile: {
        type: Object,
        required: true,
    },
    descriptionBelow: {
        type: Boolean,
        required: true,
    },
});
</script>

<style scoped>
@media (max-width: 1024px) {
    .mobile-photo {
        min-width: 100px !important;
        max-width: 100px !important;
        min-height: 100px !important;
        max-height: 100px !important;
    }
}

@media (max-width: 900px) {
    .mobile-photo {
        min-width: 35px !important;
        max-width: 35px !important;
        min-height: 35px !important;
        max-height: 35px !important;
    }
}

@media (max-width: 500px) {
    .mobile-description {
        margin-top: 20px !important;
    }
}
</style>
