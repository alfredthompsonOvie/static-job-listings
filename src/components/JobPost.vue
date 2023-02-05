<template>
	<li class="job" :class="{ featuredJob: post.featured }">
		<img
			:src="`${getImageUrl(post.logo)}`"
			:alt="`${post.company} logo`"
			class="company_logo"
		/>
		<section class="jobDetails">
			<header>
				<p class="company">
					{{ post.company }}
				</p>
				<p v-if="post.new" class="new"> new! </p>
				<p v-if="post.featured" class="feature"> featured </p>
			</header>
			<h1 class="position">
				{{ post.position }}
      </h1>
			<footer>
				<small class="footer--span">
					{{ post.postedAt }}
				</small>
				<small class="footer--span">
					{{ post.contract }}
				</small>
				<small class="footer--span">
					{{ post.location }}
				</small>
			</footer>
		</section>

		<section class="filterBy">
			<button
				@click.prevent="addToSelectedFilters({ title: post.role, category: 'roles' })"
				class="btn__bounce--right"
        type="button"
			>
				{{ post.role }}
			</button>
			<button
				@click.prevent="addToSelectedFilters({ title: post.level, category: 'levels' })"
				class="btn__bounce--right"
			>
				{{ post.level }}
			</button>
			<button
				v-for="language in post.languages"
				:key="language"
				@click.prevent="addToSelectedFilters({ title: language, category: 'languages' })"
				class="btn__bounce--right"
        >
				{{ language }}
			</button>
			<button
				v-for="tool in post.tools"
				:key="tool"
				@click.prevent="addToSelectedFilters({ title: tool, category: 'tools' })"
				class="btn__bounce--right"
        >
				{{ tool }}
			</button>
		</section>
	</li>
</template>

<script setup>
import { usePostStore } from '../store/post';

defineProps({
	post: {
		type: Object,
		required: true,
	},
});


const { addToSelectedFilters } = usePostStore();

function getImageUrl(name) {
	return new URL(`/src/assets/${name}`, import.meta.url).href;
}
</script>

<style lang="scss" scoped></style>
