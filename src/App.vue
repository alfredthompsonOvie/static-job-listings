<template>
	<div class="top-bg"></div>
	<main class="container">
		<TagList />

		<JobPostList />
	</main>
	<footer class="attribution">
		Challenge by
		<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
			>Frontend Mentor</a
		>. Coded by
		<a href="https://www.linkedin.com/in/alfredthompsonovie/"
			>Alfred Thompson Ovie</a
		>.
	</footer>
</template>

<script>
import TagList from "./components/TagList.vue";
import JobPostList from "./components/JobPostList.vue";
export default {
	name: "APP",
	components: {
		TagList,
		JobPostList,
	},
	}

</script>

<style scoped>
</style>
