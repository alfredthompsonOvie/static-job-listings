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
import { ref, computed, onMounted } from "vue";
// import JobListings from "./data.json";
import TagList from "./components/TagList.vue";
import JobPostList from "./components/JobPostList.vue";
// import { gsap } from "gsap";

export default {
	name: "APP",
	components: {
		TagList,
		JobPostList,
	},
	setup() {
		// const tags = ref([]);
		// const filterByTextLists = ref([]);
		// const filterJobLists = ref([]);
		// const test = ref({
		// 		roles: [],
		// 		levels: [],
		// 		tools: [],
		// 		languages: [],
		// 	});

		// const Jobs = ref(null);
		// function getImageUrl(name) {
		// 	return new URL(`/src/assets/${name}`, import.meta.url).href;
		// }
		// onMounted(() => {
		// 	Jobs.value = JobListings;
		// });

		// const filterJobListingsBy = computed(() => {
		// 	return Jobs.value;
		// });
		// function clearFilter() {
		// 	filterJobLists.value = [];
		// 	Jobs.value = JobListings;

		// 	// ----------------------------
		// 	filterByTextLists.value = [];
		// 	tags.value = [];
		// 	// ----------------------------

		// 	test.value = {
		// 		roles: [],
		// 		levels: [],
		// 		tools: [],
		// 		languages: [],
		// 	}
		// }
		// function deleteFilter(idx) {
		// 	filterByTextLists.value.splice(idx, 1);
		// 	tags.value.splice(idx, 1);
		// 	// const idxOfTagToDelete = test.value[tag[0].category].indexOf(tag[0].title)
		// 	test.value = {
		// 		roles: [],
		// 		levels: [],
		// 		tools: [],
		// 		languages: [],
		// 	}
		// 	// -------------------------------------------
		// 	// -------------------------------------------
		// 	// -------------------------------------------
		// 	// -------------------------------------------
		// 	filterByTextLists.value.forEach((st) => {
		// 		if (st.category === "roles") {
		// 			test.value.roles[0] = st.title;
		// 		}
		// 		if (st.category === "levels") {
		// 			test.value.levels[0] = st.title;
		// 		}
		// 		if (st.category === "tools") {
		// 			test.value.tools.push(st.title);
		// 			if (!test.value.tools.includes(st.title))
		// 			{
		// 				test.value.tools.push(st.title);
		// 			}
		// 		}
		// 		if (st.category === "languages") {
		// 			if (!test.value.languages.includes(st.title))
		// 			{
		// 				test.value.languages.push(st.title);
		// 			}
		// 		}

		// 	});
		// 	tags.value.forEach((st) => {
		// 		if (st.category === "roles") {
		// 			test.value.roles[0] = st.title;
		// 		}
		// 		if (st.category === "levels") {
		// 			test.value.levels[0] = st.title;
		// 		}
		// 		if (st.category === "tools") {
		// 			test.value.tools.push(st.title);
		// 			if (!test.value.tools.includes(st.title))
		// 			{
		// 				test.value.tools.push(st.title);
		// 			}
		// 		}
		// 		if (st.category === "languages") {
		// 			if (!test.value.languages.includes(st.title))
		// 			{
		// 				test.value.languages.push(st.title);
		// 			}
		// 		}

		// 	});
		// 	// _________---------------------------------
		// 	// _________---------------------------------
		// 	// _________---------------------------------
		// 	const newJ = JobListings.map(j => {
		// 				if (
		// 				test.value.roles.every(role => role === j.role) &&
		// 				test.value.levels.every(level => level === j.level) &&
		// 				test.value.languages.every(language => j.languages.includes(language)) &&
		// 				test.value.tools.every(tool => j.tools.includes(tool))
		// 			) {
		// 				return j;
		// 			}
		// 		}).filter(x => x!== undefined && x!== null);
			
		// 	Jobs.value = newJ;
		// }

		// function addTofilterJobLists(jobName, category) {
		// 	Jobs.value = getRelatedJobs(getJobsWith(jobName));

		// 	// ----------------------------------------------------
		// 	// only listings containing all selected filters should be returned.
		// 	// -----------------------------------------------------

		// 	// no duplicate
		// 	const check = filterByTextLists.value.some((j) => j.title === jobName);
		// 	if (!check) {
		// 		filterByTextLists.value.push({ title: jobName, category });
		// 	}
		// 	const checkTag = tags.value.some((j) => j.title === jobName);
		// 	if (!checkTag) {
		// 		tags.value.push({ title: jobName, category });
		// 	}
		// }

		// const getRelatedJobs = (arr) => {
		// 	const result = [];
		// 	for (let i = 0; i < arr.length; i++) {
		// 		if (result.includes(arr[i])) {
		// 			continue;
		// 		} else {
		// 			result.unshift(arr[i]);
		// 		}
		// 	}
			

		// 	filterByTextLists.value.forEach((st) => {
		// 		if (st.category === "roles") {
		// 			test.value.roles[0] = st.title;
		// 		}
		// 		if (st.category === "levels") {
		// 			test.value.levels[0] = st.title;
		// 		}
		// 		if (st.category === "tools") {
		// 			test.value.tools.push(st.title);
		// 			if (!test.value.tools.includes(st.title))
		// 			{
		// 				test.value.tools.push(st.title);
		// 			}
		// 		}
		// 		if (st.category === "languages") {
		// 			if (!test.value.languages.includes(st.title))
		// 			{
		// 				test.value.languages.push(st.title);
		// 			}
		// 		}

		// 	});
		// 	tags.value.forEach((st) => {
		// 		if (st.category === "roles") {
		// 			test.value.roles[0] = st.title;
		// 		}
		// 		if (st.category === "levels") {
		// 			test.value.levels[0] = st.title;
		// 		}
		// 		if (st.category === "tools") {
		// 			test.value.tools.push(st.title);
		// 			if (!test.value.tools.includes(st.title))
		// 			{
		// 				test.value.tools.push(st.title);
		// 			}
		// 		}
		// 		if (st.category === "languages") {
		// 			if (!test.value.languages.includes(st.title))
		// 			{
		// 				test.value.languages.push(st.title);
		// 			}
		// 		}

		// 	});

		// 	const fr = result.map((r) => {
		// 			if (
		// 				test.value.roles.every(role => role === r.role) &&
		// 				test.value.levels.every(level => level === r.level) &&
		// 				test.value.languages.every(language => r.languages.includes(language)) &&
		// 				test.value.tools.every(tool => r.tools.includes(tool))
		// 			) {
		// 				return r;
		// 			}
		// 		}).filter(x => x!== undefined && x!== null);

		// 	return fr;
		// 	};

		// 	const getJobsWith = (title) => {
		// 		const result = JobListings.filter((jl) => {
		// 			if (
		// 				jl.role.includes(title) ||
		// 				jl.level.includes(title) ||
		// 				jl.languages.includes(title) ||
		// 				jl.tools.includes(title)
		// 			) {
		// 				return jl;
		// 			}
		// 		});
		// 		return result;
		// 	};

			return {
				// filterByTextLists,
				// filterJobListingsBy,
				// addTofilterJobLists,
				// deleteFilter,
				// clearFilter,
				// getImageUrl,
				// tags,
				// onEnter,
				// onBeforeLeave,
				// onLeave,
			};
		},
	}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active,
.fade-move {
	transition: all 1s linear;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.fade-leave-active {
	position: absolute;
}
</style>
