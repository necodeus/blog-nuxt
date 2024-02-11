<template>
	<div class="component-padding font-jost relative">
		<SectionTitle><b>Inne</b> wpisy</SectionTitle>
		<ul>
			<li class="list" v-for="(post, p) in posts" v-bind:key="post.id">
				<NuxtLink class="text-[20px] indent-[-20px] ml-[20px] block p-[5px_0]" :to="post.slug">{{ post.title }}</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script setup>
defineProps({
	posts: {
		default: () => [],
		required: true,
	},
})
</script>

<style scoped>
.list:not(:last-child) {
	margin-bottom: 15px;
}
</style>
