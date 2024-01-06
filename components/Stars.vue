User
<template>
    <div class="star-rating">
        <div class="flex absolute">
            <div v-for="star in 5" :key="star" class="star" @click="() => { setRating(star); }">
                <svg width="25" height="25" viewBox="0 0 25 25" class="star-background">
                    <path d="M9.9,1 L12.5,7.7 L19.8,7.7 L14.15,12.3 L16.6,19 L9.9,14.6 L3.2,19 L5.65,12.3 L0,7.7 L7.3,7.7 Z" fill="#eee"></path>
                </svg>
            </div>
        </div>
        <div class="flex">
            <div v-for="star in 5" :key="star" class="star relative" @click="() => { setRating(star); }">
                <!-- <span :style="{ borderBottom: (star === selectedRating ? '1px solid black' : '0') }">{{ selectedRating }}</span> -->
                <svg width="25" height="25" viewBox="0 0 25 25" class="star-fill" :style="{ clipPath: `inset(0 ${fillWidth(star)} 0 0)` }">
                    <path d="M9.9,1 L12.5,7.7 L19.8,7.7 L14.15,12.3 L16.6,19 L9.9,14.6 L3.2,19 L5.65,12.3 L0,7.7 L7.3,7.7 Z" fill="gold"></path>
                </svg>
            </div>
        </div>
        <p>{{ rating?.toFixed(1) }}</p>
    </div>
</template>

<script setup>
const { $ws } = useNuxtApp();

const props = defineProps({
    initialRating: {
        type: Number,
        default: 0
    },
    postId: {
        type: String,
        required: false,
        default: () => ''
    }
})

const selectedRating = ref(0)

const rating = ref(props.initialRating)

watch(() => props.initialRating, (newVal) => {
    rating.value = newVal
})

const setRating = async (newRating) => {

    selectedRating.value = newRating;

    if ($ws.value.readyState !== 1) {
        console.log('Connection lost.');
        return;
    }

    $ws.value.onmessage = async (event) => {
        const { postId, average } = JSON.parse(event.data);

        if (postId === props.postId) {
            rating.value = average;
        }
    }

    $ws.value.send(JSON.stringify({
        postId: props.postId,
        value: newRating,
    }));
}

const fillWidth = (star) => {
    if (star <= Math.floor(rating.value)) {
        return '0%';
    }
    if (star === Math.ceil(rating.value)) {
        return `${100 - (rating.value % 1) * 100}%`;
    }
    return '100%';
}
</script>

<style>
.star-rating {
    display: flex;
    align-items: center;
}

.star-rating .star {
    cursor: pointer;
}

.star-rating .star .star-background {
    fill: #eee;
}

.star-rating .star .star-fill {
    fill: gold;
    clip-path: inset(0 0 0 0);
    transition: clip-path 0.25s ease-in-out;
}
</style>
