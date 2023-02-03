<template>
	<div class="top-bg"></div>
	<main class="container">
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
import { ref, computed, onMounted, onUpdated, onBeforeUpdate } from "vue";
import JobListings from "./data.json";
// import { gsap } from "gsap";

export default {
	setup() {
		// console.log(JobListings[0]);
		// const joblistings = ref([...JobListings]);
		const SearchJobsWith = ref([]);
		const filterByTextLists = ref([]);
		const filterJobLists = ref([]);
		const test = ref({
				roles: [],
				levels: [],
				tools: [],
				languages: [],
			});
		// const filterJobLists = ref([...JobListings]);
		const Jobs = ref(null);
		function getImageUrl(name) {
			return new URL(`/src/assets/${name}`, import.meta.url).href;
		}
		onMounted(() => {
			// console.log("mounted");
			Jobs.value = JobListings;
		});
		onBeforeUpdate(() => {
			console.log("onBeforeUpdate");
		});
		onUpdated(() => {
			// ListZoomIn();

			console.log("updated");
		});
		const filterJobListingsBy = computed(() => {
			return Jobs.value;
		});
		function clearFilter() {
			filterJobLists.value = [];
			Jobs.value = JobListings;
			// filterJobLists.value = [];
			filterByTextLists.value = [];
		}
		function deleteFilter(idx) {
			// tag to delete
			let tag = filterByTextLists.value.splice(idx, 1);
			// let removedItem = filterByTextLists.value.splice(idx, 1).join(",");
			const idxOfTagToDelete = test.value[tag[0].category].indexOf(tag[0].title)
			// const tagToDelete = test.value[tag[0].category][idxOfTagToDelete]
			const deletedTag = test.value[tag[0].category].splice(idxOfTagToDelete, 1)
			// console.log(tag[0].title);
			// console.log(tag[0].category);
			// console.log(idx);
			// console.log("test before delete", test.value);
			// console.log("test property", test.value[tag[0].category].splice(idxOfTagToDelete, 1));
			// console.log("idxOftagToDelete", idxOfTagToDelete);
			// console.log("tagToDelete", tagToDelete);
			// console.log("test after delete", test.value);


			
			// get job listing to remove
			// const removeJobFromList = getJobsWith(removedItem)
			// console.log(getJobsWith(removedItem));
			// // loop through filterJobLists array to remove job
			// console.log("fbj", filterJobLists.value);
			// for (let i = 0; i < getJobsWith(removedItem).length; i++) {
			// 	filterJobLists.value = filterJobLists.value.filter((job) => {
			// 		// console.log("job", job);
			// 		// console.log(getJobsWith(removedItem)[i]);
			// 		return job !== getJobsWith(removedItem)[i];
			// 	});
			// }

			// // Jobs.value = filterJobLists.value;
			// console.log("fbj", filterJobLists.value);

			// // move to watch
			// if (!filterJobLists.value.length) {
			// 	Jobs.value = JobListings;
			// }

			// console.log(filterByTextLists.value);
			// for each remaining filter text display job listing
			// filterByTextLists.value.forEach((text) => addTofilterJobLists(text));
		}

		// steps to filter
		// 1. get the text to filter by
		// 2. get all the job listing that has that text then display it
		function addTofilterJobLists(jobName, category) {
			// console.log(jobName, category);
			// console.log(filterJobLists.value.length);

			// no duplicate
			// removeDuplicate(getJobsWith(jobName));

			// Jobs.value = removeDuplicate(getJobsWith(jobName));
			Jobs.value = getRelatedJobs(getJobsWith(jobName));

			// console.log(removeDuplicate(getJobsWith(jobName)));
			// console.log(filterJobLists.value);
			// console.log(filterJobLists.value.length);

			// console.log("filterJobLists: ", filterJobLists.value);

			// ----------------------------------------------------
			// only listings containing all selected filters should be returned.
			// -----------------------------------------------------
			// Jobs.value = filterJobLists.value;
			// Jobs.value = filterJobLists.value;

			// filterByTextLists.value.push({ title: jobName, category});

			// no duplicate
			const check = filterByTextLists.value.some((j) => j.title === jobName);
			if (!check) {
				filterByTextLists.value.push({ title: jobName, category });
			}

			// console.log("filterBy", filterByTextLists.value);
			console.log(getRelatedJobs(getJobsWith(jobName)));
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
				// console.log("outter", st.category);
				// console.log("does tools exist?", test.value.tools.includes(st.title));
				// console.log("does languages exist?", test.value.languages.includes(st.title));
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

			console.log("test from add", test.value);
			// console.log("result", result);
			const fr = result.map((r) => {
				// let newResult = [];

					if (
						test.value.roles.every(role => role === r.role) &&
						test.value.levels.every(level => level === r.level) &&
						test.value.languages.every(language => r.languages.includes(language)) &&
						test.value.tools.every(tool => r.tools.includes(tool))
					) {
						return r;
					}
				}).filter(x => x!== undefined && x!== null);

			console.log("fr", fr);

			return fr;
			};
			// addTofilterJobLists
			const removeDuplicate = (arr) => {
				let searchArr = [];
				for (let i = 0; i < arr.length; i++) {
					if (searchArr.includes(arr[i])) {
						continue;
					} else {
						searchArr.unshift(arr[i]);
					}
				}
				return searchArr;
				// for (let i = 0; i < arr.length; i++) {
				// 	if (filterJobLists.value.includes(arr[i])) {
				// 		continue;
				// 	} else {
				// 		filterJobLists.value.unshift(arr[i]);
				// 	}
				// }
			};
			const selectedFilter = (search) => {
				// if css and html return them only
				// filterByTextLists.value =
				// [{title: "frontend", cat: "role"}, {title: "senior", cat: "level"}]

				//firstSearch = getJobsWith(title) for all the css = []
				//secSearch = getJobsWith(title) for all the html = []
				// compare new with curr and return unique
				// all arr

				// const allSearch = []; should be outside this function

				// allSearch.push(getJobsWith(title))
				// allSearch.filter(job => {
				// roles = frontend jl.role.includes(title)
				// languages				jl.level.includes(title)
				// level = senior		jl.senior.includes(title)
				// tools 						jl.tools.includes(title)

				// job.role ===
				// --------------------------------------
				// --------------------------------------
				/*
					const check = filterByTextLists.value.some((j) => j.title === jobName);
				if (!check) {
					filterByTextLists.value.push({ title: jobName, category });
				}
				[{}, {}, {}, {}, {}]
				
				// const searchResult = []
				// const checkArr = searchResult.some((j) => j.role === jobName);
					
				const sR = allSearch.filter((e, i)=> {
						//e.role = frontend backend fullstack
						//e.level = senior midweight junior
						// e.languages
						// e.tools
						if e.role already exist skip it
						return e.role === filterByTextLists.value[i].title ||
						e.level === filterByTextLists.value[i].title||
						e.languages.include(filterByTextLists.value[i].title) ||
						e.tools.include(filterByTextLists.value[i].title)
					})
					console.log(sR)
				*/
				// --------------------------------------
				// --------------------------------------
				// the list
				// if a job has jl.role and jl.level

				// --------------------------------------
				// search all jobs only return jobs that roles, lang...
				// matches filterByTextLists.value
				// --------------------------------------
				// --------------------------------------
				// --------------------------------------

				/**
				 *  filterByTextLists.value = [
					{title: senior, category: level}
					{title: css, category: language}
				]
					//e.role = frontend backend fullstack
						//e.level = senior midweight junior
						// e.languages
						// e.tools
				jobs = [{}, {}, {}, {}, {}]
				jobs.map(j=> {
					const result = [];
					for(let i = 0; i < filterByTextLists.value.length; i++){
						if(
							j.role === filterByTextLists.value[i].title ||
							j.level === filterByTextLists.value[i].title ||
							j.tools === filterByTextLists.value[i].title ||
							j.role === filterByTextLists.value[i].title
							) {
								result.push(j)
							}
	
					}
				})
				 * 
				 * 
				 */
				// --------------------------------------
				// --------------------------------------
				// --------------------------------------
				// })

				JobListings.filter((job) => {
					return job;
				});
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
					// if (jl.level.includes(title)) {
					// 	return jl;
					// }
					// if (jl.languages.includes(title)) {
					// 	return jl;
					// }
					// if (jl.tools.includes(title)) {
					// 	return jl;
					// }
				});
				// console.log("titles", filterByTextLists.value);
				// all jobs with title
				// console.log("getRelatedJobs", result);
				// return jobs containing only searchTerms
				// css
				// css html
				return result;
			};

			return {
				filterByTextLists,
				filterJobListingsBy,
				addTofilterJobLists,
				deleteFilter,
				clearFilter,
				getImageUrl,
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
