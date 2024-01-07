<template>
    <div class="component-border-horizontal relative font-jost">
        <div class="p-[7px]">
            <picture>
                <source media="(min-width: 768px)" srcset="/uploads/backgrounds/error.jpg" />
                <img
                    src="/uploads/backgrounds/error.jpg"
                    loading="lazy"
                />
            </picture>
            <div class="m-[20px] absolute z-[1] top-0 right-0 flex">
                <PetTheCat class="mr-2" />
                <BackFilled />
            </div>
        </div>
    </div>
    <div class="component-border-horizontal relative font-jost">
        <div class="text-[20px] font-jost relative border-b-[1px] border-solid border-[#eee]">
            <p class="m-[30px] leading-[35px]"><b>{{ code }} ~ </b>{{ message }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    code: {
        type: Number,
        required: true,
        default: 500,
    },
    message: {
        type: String,
        required: true,
        default: 'Internal Server Error',
    },
})
</script>
