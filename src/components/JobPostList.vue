<template>
  <TransitionGroup 
  tag="ul" 
  mode="out-in" 
  name="fade"
  >
    <JobPost v-for="post in store.postLists" :key="post.id" :post="post" />
  </TransitionGroup>
</template>

<script setup>
import JobPost from "./JobPost.vue";
import { usePostStore } from "../store/post";

const store = usePostStore();
</script>

<style scoped>
.fade-enter-active,
.fade-move {
	transition: all .6s linear;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
  transform: scale(0.95);
}

.fade-leave-active {
	position: absolute;
  transition: all .6s linear;
}
</style>
