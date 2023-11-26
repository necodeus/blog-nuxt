<template>
    <div class="component-border-horizontal relative font-jost">
        <!-- TODO: move background image to images.necodeo.com or s3 -->
        <img style="margin: 7px; width: calc(100% - 14px); height: auto;" src="/uploads/backgrounds/error.jpg" />
        <div class="m-[20px] absolute z-[1] top-0 right-0 flex">
            <PetTheCat class="mr-2" />
            <BackFilled />
        </div>
    </div>
    <div class="text-[20px] font-jost relative border-b-[1px] border-solid border-[#eee]">
        <p class="m-[30px] leading-[35px]"><b>{{ code }} ~ </b>{{ message }}</p>
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

<style scoped>
.background {
    background-color: #eee;
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    margin: 7px 7px 0 7px;
}
</style>