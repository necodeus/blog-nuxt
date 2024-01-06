<template>
	<div class="c-archive component-padding component-border-horizontal font-jost">
		<SectionTitle><b>Archive</b> of posts</SectionTitle>
		<ul>
			<li>
				<NuxtLink to="/archive/june-2020">
					<div>
						<div class="month">June 2020</div>
						<div class="separator"></div>
						<div class="num-of-posts">2 posts</div>
					</div>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

};
</script>

<style>
.c-archive ul > li:not(:last-child) {
	margin-bottom: 15px;
}

.c-archive ul > li > a > div {
	padding: 10px 0;
	display: flex;
	align-items: center;
}

.c-archive ul > li > a > div > .month {
	width: auto;
	font-size: 20px;
	white-space: nowrap;
}

.c-archive ul > li > a > div > .separator {
	margin: 0 10px;
	background-color: #e1e1e1;
	width: 50px;
	width: 100%;
	height: 1px;
}

.c-archive ul > li > a > div > .num-of-posts {
	font-size: 17px;
	white-space: nowrap;
}
</style>
