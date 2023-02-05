<template>
	<button
		class="filteredBtn"
		type="button"
		@click.prevent="deleteSelectedFilters(index)"
	>
	<span class="btnContent">
		{{ tag.title }}
	</span>
	<span class="deleteBtn">
			<font-awesome-icon icon="fa-solid fa-xmark" />
		</span>
	</button>
</template>

<script setup>
import { usePostStore } from "../store/post";

defineProps({
	tag: {
		type: Object,
		required: true,
	},
	index: {
		type: Number,
		required: true,
	},
});

const { deleteSelectedFilters } = usePostStore();
</script>

<style lang="scss" scoped></style>
