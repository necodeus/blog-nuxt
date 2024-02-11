<template>
    <div class="flex items-center text-[20px]">
        <picture>
            <source media="(min-width: 900px)" :srcset="`https://images.necodeo.com/${profile.image_id_avatar}/50x50`" />
            <source media="(min-width: 0px)" :srcset="`https://images.necodeo.com/${profile.image_id_avatar}/35x35`" />
            <img
                class="mobile-photo min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] bg-cover bg-center !rounded-[50%] bg-[#eee]"
                :src="`https://images.necodeo.com/${profile.image_id_avatar}`"
                loading="lazy"
            />
        </picture>
        <div class="ml-[20px] pr-[20px]">
            <div class="font-medium inline-block">
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
