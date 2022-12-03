<template>
	<div class="top-bg"></div>
	<main class="container">
		<Transition 
		name="fade-up"
		>
			<section class="filterResult" v-if="filterByTextLists.length">
				<div class="filteredBtnWrapper">
					<button
						v-for="(filterList, idx) in filterByTextLists"
						:key="filterList"
						class="filteredBtn"
					>
						<span class="btnContent">
							{{ filterList }}
						</span>
						<span class="deleteBtn" @click="deleteFilter(idx)">
							<font-awesome-icon icon="fa-solid fa-xmark" />
						</span>
					</button>
				</div>
				<button class="clearBtn" @click="clearFilter">clear</button>
			</section>
		</Transition>

		<ul>
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
						@click="addTofilterJobLists(joblisting.role)"
						class="hvr-bounce-to-right"
					>
						{{ joblisting.role }}
					</button>
					<button
						v-if="joblisting.level"
						@click="addTofilterJobLists(joblisting.level)"
						class="hvr-bounce-to-right"
					>
						{{ joblisting.level }}
					</button>
					<button
						v-for="language in joblisting.languages"
						:key="language"
						@click="addTofilterJobLists(language)"
						class="hvr-bounce-to-right"
					>
						{{ language }}
					</button>
					<button
						v-for="tool in joblisting.tools"
						:key="tool"
						@click="addTofilterJobLists(tool)"
						class="hvr-bounce-to-right"
					>
						{{ tool }}
					</button>
				</div>
			</li>
		</ul>
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
import { ref, computed, onMounted, onUpdated } from "vue";
import JobListings from "./data.json";
import { gsap } from "gsap";

export default {
	setup() {
		onMounted(() => {
			gsap.from(".job", {
				xPercent: -40,
				autoAlpha: 0.01,
				stagger: 0.3,
				ease: "back.out",
					duration: 1.8,
				onComplete: () => gsap.to(".job", { clearProps: "all" }),
			});
		});
		onUpdated(() => {
			gsap.from(".job", {
				yPercent: 30,
				autoAlpha: 0,
				ease: "expo.out",
				duration: 1.6,
				stagger: 0.3,
			})
		})

		const joblistings = ref([...JobListings]);
		const filterByTextLists = ref([]);
		const filterJobLists = ref([]);

		function getImageUrl(name) {
			return new URL(`/src/assets/${name}`, import.meta.url).href;
		}

		// steps to filter
		// 1. get the text to filter by
		// 2. get all the job listing that has that text then display it
		function addTofilterJobLists(jobList) {
			const jobListing = joblistings.value.filter((jl) => {
				if (jl.role.includes(jobList)) {
					return jl;
				}
				if (jl.level.includes(jobList)) {
					return jl;
				}
				if (jl.languages.includes(jobList)) {
					return jl;
				}
				if (jl.tools.includes(jobList)) {
					return jl;
				}
			});

			// no duplicate
			for (let i = 0; i < jobListing.length; i++) {
				if (filterJobLists.value.includes(jobListing[i])) {
					continue;
				} else {
					filterJobLists.value.push(jobListing[i]);
				}
			}
			// console.log(filterJobLists.value);
			// no duplicate
			if (!filterByTextLists.value.includes(jobList)) {
				filterByTextLists.value.push(jobList);
			}
		}
		const filterJobListingsBy = computed(() => {
			if (filterJobLists.value.length) {
				return filterJobLists.value;
			} else {
				return joblistings.value;
			}
		});
		// steps to delete a filtered job
		// using the text filter out all job listing that contains that text
		function deleteFilter(idx) {
			let removedItem = filterByTextLists.value.splice(idx, 1).join(",");
			// get job listing to remove
			const removeJobFromList = filterJobLists.value.filter((rjl) => {
				if (rjl.role.includes(removedItem)) {
					return rjl;
				}
				if (rjl.level.includes(removedItem)) {
					return rjl;
				}
				if (rjl.languages.includes(removedItem)) {
					return rjl;
				}
				if (rjl.tools.includes(removedItem)) {
					return rjl;
				}
			});
			// loop through filterJobLists array to remove job
			for (let i = 0; i < removeJobFromList.length; i++) {
				filterJobLists.value = filterJobLists.value.filter((job) => {
					return job !== removeJobFromList[i];
				});
			}
			// for each remaining filter text display job listing
			filterByTextLists.value.forEach((text) => addTofilterJobLists(text));
		}
		function clearFilter() {
			filterJobLists.value = [];
			filterByTextLists.value = [];
		}
		return {
			filterByTextLists,
			filterJobListingsBy,
			addTofilterJobLists,
			deleteFilter,
			clearFilter,
			getImageUrl,
		};
	},
};
</script>

<style></style>
