<template>
	<button
		class="filteredBtn"
		type="button"
	>
		<span class="btnContent">
			{{ tag.title }}
		</span>
		<span class="deleteBtn" @click.prevent="deletePost(index)">
			<font-awesome-icon icon="fa-solid fa-xmark" />
		</span>
	</button>
</template>

<script setup>
// import { defineProps } from 'vue';

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
const emit = defineEmits(["deletePost"])

const deletePost = (idx) => {
  emit('deletePost', idx)
}

</script>

<style lang="scss" scoped></style>
