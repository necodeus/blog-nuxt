<template>
	<div class="other-posts component-padding component-border-horizontal font-jost" v-show="!pending">
		<SectionTitle><b>Inne</b> wpisy</SectionTitle>
		<ul>
			<li class="text-[20px]" v-for="(post, p) in filteredPosts" v-bind:key="p">
				<NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script setup>
const { data: r1, pending, error, refresh } = await useAsyncData('other-posts', () => $fetch('/api/posts'))

const {
	data: {
		posts,
	},
} = unref(r1)

const route = useRoute()

const filteredPosts = posts.filter((post) => post.content_id !== route.meta.content_id)
console.log(filteredPosts)

</script>

<style>
.other-posts > ul > li {
	text-indent: -20px;
	margin-left: 20px;
}

.other-posts > ul > li > a {
	padding: 5px 0;
	display: block;
}

.other-posts > ul > li:not(:last-child) {
	margin-bottom: 15px;
}
</style>
