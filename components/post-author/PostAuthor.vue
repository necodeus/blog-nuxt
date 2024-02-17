<template>
    <div class="font-jost flex items-center text-[20px] p-[24px] bg-[#eee] rounded-[7px]">
        <picture>
            <img
                class="mobile-photo min-w-[55px] max-w-[55px] min-h-[55px] max-h-[55px] bg-cover bg-center !rounded-[50%] bg-[#eee]"
                :src="`https://images.necodeo.com/${profile.image_id_avatar}`"
                loading="lazy"
            />
        </picture>
        <div class="ml-[20px]">
            <div class="font-medium">
                {{ profile.display_name }}
            </div>
            <div class="mt-[2px] text-[16px]">
                {{ profile.bio }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    profile: {
        type: Object,
        required: true,
    },
})
</script>
