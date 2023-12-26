<template>
    <button
        class="bg-[black] text-[white] border-[#dfdfdf] w-full border-[0px] rounded-[16px] px-[22px] py-[14px] font-medium justify-center flex items-center relative"
        v-on:click.prevent="handleButtonClick">
        Wyślij
        <svg style="width: 18px; height: 18px; min-width: 18px; min-height: 18px" class="ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
    </button>
</template>

<script setup>
const { onClick } = defineProps({
    onClick: Function,
});

const handleButtonClick = (event) => {
  createRipple(event);
  onClick();
};

const createRipple = (event) => {
  const button = event.currentTarget;

  const rect = button.getBoundingClientRect();

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  const buttonPosX = event.clientX - rect.left;
  const buttonPosY = event.clientY - rect.top;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${buttonPosX - radius}px`;
  circle.style.top = `${buttonPosY - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
};
</script>

<style>
.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple-animation 600ms linear;
    background: radial-gradient(circle, rgba(200, 200, 200, 0.7) 0%, rgba(200, 200, 200, 0) 50%);
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

button {
    position: relative;
    overflow: hidden;
}
</style>