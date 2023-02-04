<template>
	<Transition name="fade-up">
		<section class="filterResult" v-if="tags.length">
			<div class="filteredBtnWrapper">
				<TransitionGroup name="btn" appear>
					<TagButton 
          v-for="(tag, idx) in tags" 
          :key="tag.title"
          :tag="tag" 
          :index="idx"
          @deletePost="removeTag"
          />
          
				</TransitionGroup>
			</div>
			<button class="clearBtn" @click.prevent="clearFilter">clear</button>
		</section>
	</Transition>
</template>

<script setup>
// import { defineProps } from 'vue';
import TagButton from './TagButton.vue';

const props = defineProps({
  tags: {
    type: Array,
    required: true
  }
})
const removeTag = () => {
  
}

</script>

<style lang="scss" scoped></style>
