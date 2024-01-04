<template>
	<div class="component-padding component-border-horizontal font-jost">
		<SectionTitle><b>Inne</b> wpisy</SectionTitle>
		<ul>
			<li class="text-[20px] indent-[-20px] ml-[20px] mb-[15px]" v-for="(post, p) in posts" v-bind:key="p">
				<NuxtLink class="block p-[5px_0]" :to="post.slug">{{ post.title }}</NuxtLink>
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
