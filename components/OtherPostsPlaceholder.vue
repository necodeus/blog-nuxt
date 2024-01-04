<template>
	<div class="component-padding component-border-horizontal font-jost">
		<SectionTitle><b>Inne</b> wpisy</SectionTitle>
		<ul>
			<li class="text-[20px]" v-for="(post, p) in 3" v-bind:key="p">
				<div class="content-placeholder" to="/">&nbsp;</div>
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
    background: linear-gradient(to right, #eeeeee 8%, #fff 18%, #eeeeee 33%);
    background-size: 800px 104px;
    line-height: 35px;
    position: relative;
    background-color: #eee;
    border-radius: 4px;
    color: transparent;
	display: block;
}

ul > li:not(:last-child) {
	margin-bottom: 15px;
}
</style>
