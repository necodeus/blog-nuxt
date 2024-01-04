<template>
	<div class="external-links component-padding component-border-horizontal font-jost">
		<SectionTitle><b>Linki </b> zewnętrzne</SectionTitle>
		<ul>
			<li>
				<a
					class="text-[20px] block"
					target="_blank"
					rel="noopener noreferrer nofollow"
					href="https://nuxt.com/"
				>
					<b>nuxt.com</b>
					<div class="link-description">Oficjalna strona Nuxt.js</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<style>
.external-links > ul > li {
	text-indent: -20px;
	margin-left: 20px;
}

.external-links > ul > li > a {
	padding: 5px 0;
	width: 100%;
	display: block;
}

.external-links > ul > li > a > div.link-description {
	margin-top: 5px;
}

.external-links > ul > li:not(:last-child) {
	margin-bottom: 15px;
}
</style>
