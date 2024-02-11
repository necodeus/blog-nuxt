<template>
	<div class="component-padding font-jost">
		<SectionTitle><b>Inne</b> wpisy</SectionTitle>
		<ul>
			<li class="list text-[20px]" v-for="(post, p) in 3" v-bind:key="p">
				<div class="content-placeholder" to="/">
                    Lorem ipsum dolor sit amet.
                </div>
			</li>
		</ul>
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

.content-placeholder {
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #c4c4c41a 8%, #fff 18%, #c4c4c41a 33%);
    background-size: 800px 104px;
    line-height: 35px;
    position: relative;
    background-color: #c4c4c41a;
    border-radius: 4px;
    color: transparent;
	display: inline-block;
}

.list:not(:last-child) {
	margin-bottom: 15px;
}
</style>
