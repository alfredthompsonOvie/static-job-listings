<template>
	<li class="job" :class="{ featuredJob: post.featured }">
		<img
			:src="`${getImageUrl(post.logo)}`"
			alt="company logo"
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
				<small class="footer-span">
					{{ post.postedAt }}
				</small>
				<small class="footer-span">
					{{ post.contract }}
				</small>
				<small class="footer-span">
					{{ post.location }}
				</small>
			</footer>
		</section>

		<section class="filterBy">
      <!-- v-if="post.role" -->
			<button
				@click.prevent="addToSelectedFilters({ title: post.role, category: 'roles' })"
				class="hvr-bounce-to-right"
        type="button"
			>
				{{ post.role }}
			</button>
      <!-- v-if="post.level" -->
			<button
				@click.prevent="addToSelectedFilters({ title: post.level, category: 'levels' })"
				class="hvr-bounce-to-right"
			>
				{{ post.level }}
			</button>
			<button
				v-for="language in post.languages"
				:key="language"
				@click.prevent="addToSelectedFilters({ title: language, category: 'languages' })"
				class="hvr-bounce-to-right"
        >
				<!-- @click.prevent="filterPostWith({ title: language, category: 'languages' })" -->
				{{ language }}
			</button>
			<button
				v-for="tool in post.tools"
				:key="tool"
				@click.prevent="addToSelectedFilters({ title: tool, category: 'tools' })"
				class="hvr-bounce-to-right"
        >
				<!-- @click.prevent="filterPostWith({ title: tool, category: 'tools' })" -->
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
// const emit = defineEmits(['filterBy'])

const { addToSelectedFilters } = usePostStore();

function getImageUrl(name) {
	return new URL(`/src/assets/${name}`, import.meta.url).href;
}
// const filterPostWith = (filterWith) => {
//   emit('filterBy', filterWith)
// }
</script>

<style lang="scss" scoped></style>
