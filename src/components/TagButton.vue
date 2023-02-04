<template>
	<button
		class="filteredBtn"
		type="button"
	>
		<span class="btnContent">
			{{ tag.title }}
		</span>
		<span class="deleteBtn" @click.prevent="deleteSelectedFilters(index)">
			<font-awesome-icon icon="fa-solid fa-xmark" />
		</span>
	</button>
</template>

<script setup>
import { usePostStore } from '../store/post';

const props = defineProps({
  tag: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const { deleteSelectedFilters } = usePostStore();

</script>

<style lang="scss" scoped></style>
