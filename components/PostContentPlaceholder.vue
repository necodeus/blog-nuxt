<template>
    <div class="content-placeholder text-[20px] border-b-[1px] border-solid border-[#eee] relative font-jost">
        <div>
            Integer tincidunt laoreet luctus. Suspendisse a elementum ligula. Etiam
            accumsan orci ac nunc consectetur, non ornare quam lobortis. Nullam rhoncus
            elementum neque, et facilisis orci facilisis vel.
        </div>
        <div>
            Donec euismod, velit ac fermentum blandit, ex mi pulvinar est, eu efficitur
            est purus pharetra orci. Maecenas varius orci at turpis pellentesque, vel
            convallis felis sagittis. Mauris euismod lectus id nisi euismod laoreet.
            Aliquam in malesuada justo. Praesent aliquet ut lorem nec mattis. Morbi congue
            pharetra lorem, non congue elit interdum et. Vivamus id sollicitudin urna.
            Aliquam id erat dolor. Proin semper tortor vel massa feugiat dapibus. Nullam
            sed faucibus leo. Ut fermentum volutpat nibh, non condimentum odio laoreet in.
            Praesent non mattis ipsum. Proin varius tortor libero, id condimentum est
            dignissim quis.
        </div>
    </div>
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

.content-placeholder > div {
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #eeeeee 8%, #fff 18%, #eeeeee 33%);
    background-size: 800px 104px;
    line-height: 35px;
    position: relative;
    background-color: #eee;
    border-radius: 4px;
    color: transparent;
    margin: 30px;
}
</style>
