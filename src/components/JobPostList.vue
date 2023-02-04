<template>
	<JobPost v-for="post in store.postLists" :key="post.id" :post="post" />
</template>

<script setup>
import JobPost from "./JobPost.vue";
import { usePostStore } from "../store/post";

const store = usePostStore();
</script>

<style lang="scss" scoped></style>
