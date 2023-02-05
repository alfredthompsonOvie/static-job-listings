<template>
	<Transition name="fade-up">
		<section class="filterResult" v-if="store.NumberOfTags">
			<div class="filteredBtnWrapper">
				<TransitionGroup name="btn" appear>
					<TagButton 
          v-for="(tag, idx) in store.tags" 
          :key="tag.title"
          :tag="tag" 
          :index="idx"
          />
				</TransitionGroup>
			</div>
			<button type="button" class="clearBtn" @click.prevent="store.clearSelectedFilters">clear</button>
		</section>
	</Transition>
</template>

<script setup>
import { usePostStore } from '../store/post';
import TagButton from './TagButton.vue';

const store = usePostStore();

</script>

<style lang="scss" scoped></style>
