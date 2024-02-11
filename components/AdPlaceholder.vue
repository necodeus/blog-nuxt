<template>
    <div class="ad-placeholder animated-background">WCZYTYWANIE<br/>REKLAMY</div>
</template>

<style scoped>
@keyframes placeHolderShimmer {
    0% {
        background-position: -800px 0;
    }

    100% {
        background-position: 800px 0;
    }
}

.animated-background {
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;

    background: linear-gradient(to right, #eeeeee 8%, #fff 18%, #eeeeee 33%);
    background-size: 800px 104px;
    background-color: #eeeeee;
    border-radius: 4px;
    color: transparent;
}

.ad-placeholder {
    text-align: center;
    width: 320px;
    min-height: 250px;
    background-color: #eee;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
    font-family: Jost, sans-serif;
    font-size: 16px;
    line-height: 32px;
}
</style>
