<template>
    <div class="flex items-center mt-2.5">
        <div class="mobile-photo min-w-[120px] max-w-[120px] min-h-[120px] max-h-[120px] bg-cover bg-center !rounded-[50%] bg-[#eee]"
            :style="`background-image: url(${profile.avatarUrl})`"></div>
        <div class="ml-[20px] pr-[20px]">
            <div class="uppercase text-[20px] tracking-[1px]">{{ profile.displayName }}</div>
            <div v-if="!descriptionBelow" class="mobile-description mt-[10px] text-[17px]">
                {{ profile.bio }}
            </div>
        </div>
    </div>
    <div v-if="descriptionBelow" class="mobile-description text-[17px] mt-[10px]">
        {{ profile.bio }}
    </div>
</template>

<script lang="ts" setup>
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
