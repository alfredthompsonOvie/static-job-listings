<template>
	<div class="top-bg"></div>
	<main class="container">
		<TagList :tags="tags"/>
		<Transition name="fade-up">
			<section class="filterResult" v-if="filterByTextLists.length">
				<div class="filteredBtnWrapper">
					<TransitionGroup name="btn" appear>
						<button
							v-for="(filterList, idx) in filterByTextLists"
							:key="filterList"
							class="filteredBtn"
							type="button"
						>
							<span class="btnContent">
								{{ filterList.title }}
							</span>
							<span class="deleteBtn" @click.prevent="deleteFilter(idx)">
								<font-awesome-icon icon="fa-solid fa-xmark" />
							</span>
						</button>
					</TransitionGroup>
				</div>
				<button class="clearBtn" @click.prevent="clearFilter">clear</button>
			</section>
		</Transition>

		<TransitionGroup tag="ul" mode="out-in" name="fade">
			<li
				v-for="joblisting in filterJobListingsBy"
				:key="joblisting.id"
				class="job"
				:class="{ featuredJob: joblisting.featured }"
			>
				<img
					:src="`${getImageUrl(joblisting.logo)}`"
					alt="company logo"
					class="company_logo"
				/>
				<div class="jobDetails">
					<header>
						<span class="company">
							{{ joblisting.company }}
						</span>
						<span v-if="joblisting.new" class="new"> new! </span>
						<span v-if="joblisting.featured" class="feature"> featured </span>
					</header>
					<div class="position">
						{{ joblisting.position }}
					</div>
					<footer>
						<span class="footer-span">
							{{ joblisting.postedAt }}
						</span>
						<span class="footer-span">
							{{ joblisting.contract }}
						</span>
						<span class="footer-span">
							{{ joblisting.location }}
						</span>
					</footer>
				</div>

				<div class="filterBy">
					<button
						v-if="joblisting.role"
						@click.prevent="addTofilterJobLists(joblisting.role, 'roles')"
						class="hvr-bounce-to-right"
					>
						{{ joblisting.role }}
					</button>
					<button
						v-if="joblisting.level"
						@click.prevent="addTofilterJobLists(joblisting.level, 'levels')"
						class="hvr-bounce-to-right"
					>
						{{ joblisting.level }}
					</button>
					<button
						v-for="language in joblisting.languages"
						:key="language"
						@click.prevent="addTofilterJobLists(language, 'languages')"
						class="hvr-bounce-to-right"
					>
						{{ language }}
					</button>
					<button
						v-for="tool in joblisting.tools"
						:key="tool"
						@click.prevent="addTofilterJobLists(tool, 'tools')"
						class="hvr-bounce-to-right"
					>
						{{ tool }}
					</button>
				</div>
			</li>
		</TransitionGroup>
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
import JobListings from "./data.json";
import TagList from "./components/TagList.vue";
// import { gsap } from "gsap";

export default {
	name: "APP",
	components: {
		TagList
	},
	setup() {
		const tags = ref([]);
		const filterByTextLists = ref([]);
		const filterJobLists = ref([]);
		const test = ref({
				roles: [],
				levels: [],
				tools: [],
				languages: [],
			});

		const Jobs = ref(null);
		function getImageUrl(name) {
			return new URL(`/src/assets/${name}`, import.meta.url).href;
		}
		onMounted(() => {
			Jobs.value = JobListings;
		});

		const filterJobListingsBy = computed(() => {
			return Jobs.value;
		});
		function clearFilter() {
			filterJobLists.value = [];
			Jobs.value = JobListings;
			filterByTextLists.value = [];
			test.value = {
				roles: [],
				levels: [],
				tools: [],
				languages: [],
			}
		}
		function deleteFilter(idx) {
			filterByTextLists.value.splice(idx, 1);
			// const idxOfTagToDelete = test.value[tag[0].category].indexOf(tag[0].title)
			test.value = {
				roles: [],
				levels: [],
				tools: [],
				languages: [],
			}
			filterByTextLists.value.forEach((st) => {
				if (st.category === "roles") {
					test.value.roles[0] = st.title;
				}
				if (st.category === "levels") {
					test.value.levels[0] = st.title;
				}
				if (st.category === "tools") {
					test.value.tools.push(st.title);
					if (!test.value.tools.includes(st.title))
					{
						test.value.tools.push(st.title);
					}
				}
				if (st.category === "languages") {
					if (!test.value.languages.includes(st.title))
					{
						test.value.languages.push(st.title);
					}
				}

			});
			const newJ = JobListings.map(j => {
						if (
						test.value.roles.every(role => role === j.role) &&
						test.value.levels.every(level => level === j.level) &&
						test.value.languages.every(language => j.languages.includes(language)) &&
						test.value.tools.every(tool => j.tools.includes(tool))
					) {
						return j;
					}
				}).filter(x => x!== undefined && x!== null);
			
			Jobs.value = newJ;
		}

		function addTofilterJobLists(jobName, category) {
			Jobs.value = getRelatedJobs(getJobsWith(jobName));

			// ----------------------------------------------------
			// only listings containing all selected filters should be returned.
			// -----------------------------------------------------

			// no duplicate
			const check = filterByTextLists.value.some((j) => j.title === jobName);
			if (!check) {
				filterByTextLists.value.push({ title: jobName, category });
			}
		}

		const getRelatedJobs = (arr) => {
			const result = [];
			for (let i = 0; i < arr.length; i++) {
				if (result.includes(arr[i])) {
					continue;
				} else {
					result.unshift(arr[i]);
				}
			}
			

			filterByTextLists.value.forEach((st) => {
				if (st.category === "roles") {
					test.value.roles[0] = st.title;
				}
				if (st.category === "levels") {
					test.value.levels[0] = st.title;
				}
				if (st.category === "tools") {
					test.value.tools.push(st.title);
					if (!test.value.tools.includes(st.title))
					{
						test.value.tools.push(st.title);
					}
				}
				if (st.category === "languages") {
					if (!test.value.languages.includes(st.title))
					{
						test.value.languages.push(st.title);
					}
				}

			});

			const fr = result.map((r) => {
					if (
						test.value.roles.every(role => role === r.role) &&
						test.value.levels.every(level => level === r.level) &&
						test.value.languages.every(language => r.languages.includes(language)) &&
						test.value.tools.every(tool => r.tools.includes(tool))
					) {
						return r;
					}
				}).filter(x => x!== undefined && x!== null);

			return fr;
			};

			const getJobsWith = (title) => {
				const result = JobListings.filter((jl) => {
					if (
						jl.role.includes(title) ||
						jl.level.includes(title) ||
						jl.languages.includes(title) ||
						jl.tools.includes(title)
					) {
						return jl;
					}
				});
				return result;
			};

			return {
				filterByTextLists,
				filterJobListingsBy,
				addTofilterJobLists,
				deleteFilter,
				clearFilter,
				getImageUrl,
				tags,
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
