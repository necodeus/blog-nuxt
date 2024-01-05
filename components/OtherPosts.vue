<template>
	<OtherPostsPlaceholder v-show="pending" />
	<OtherPostsFilled v-show="!pending" :posts="getData(data.posts)" />
</template>

<script setup>
const getData = (posts = []) => {
	const currentRoute = router.currentRoute.value.path

	return posts.filter((post) => post.slug !== currentRoute) || []
}

const { data, pending } = useFetch('/api/posts')

const router = useRouter()
</script>
