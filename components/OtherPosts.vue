<template>
	<OtherPostsPlaceholder v-show="pending" />
	<OtherPostsFilled v-show="!pending" :posts="getData(data.posts)" />
</template>

<script setup>
const getData = (posts = []) => {
	return posts.filter((post) => post.slug !== route.params.slug) || []
}

const { data, pending } = useFetch('/api/posts')

const route = useRoute()
</script>
