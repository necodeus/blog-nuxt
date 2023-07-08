<template>
	<div class="popular-posts component-padding component-border-horizontal font-jost">
		<SectionTitle><b>Przypięte</b> wpisy</SectionTitle>
		<ul>
			<li>
				<NuxtLink :to="'/hello-world'">Pellentesque gravida metus orci.</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="'/hello-world'">Donec eget hendrerit lorem. Sed quis congue sapien.</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="'/hello-world'">Pellentesque vestibulum, nisl in porttitor elementum.</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<style>
.popular-posts > ul > li {
	text-indent: -20px;
	margin-left: 20px;
}

.popular-posts > ul > li > a {
	padding: 5px 0;
	display: block;
}

.popular-posts > ul > li:not(:last-child) {
	margin-bottom: 15px;
}
</style>
