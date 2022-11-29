<template>
	<div class="top-bg"></div>
	<div class="container">
		<section class="filterResult" v-if="filterByTextLists.length">
			<div class="filteredBtnWrapper">
				<button
					v-for="filterList in filterByTextLists"
					:key="filterList"
					class="filteredBtn"
				>
					<span class="btnContent">
						{{ filterList }}
					</span>
					<span class="deleteBtn" @click="j">x</span>
				</button>
			</div>
			<button class="clearBtn">clear</button>
		</section>

		<ul :class="{ joblists: filterByTextLists.length}">
			<li
				v-for="joblisting in filterJobListingsBy"
				:key="joblisting.id"
				class="job"
				:class="{ featuredJob: joblisting.featured }"
			>
				<img
					:src="'src/assets/' + joblisting.logo"
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
					>
						{{ joblisting.role }}
					</button>
					<button
						v-if="joblisting.level"
						@click="addTofilterJobLists(joblisting.level)"
					>
						{{ joblisting.level }}
					</button>
					<button
						v-for="language in joblisting.languages"
						:key="language"
						@click="addTofilterJobLists(language)"
					>
						{{ language }}
					</button>
					<button
						v-for="tool in joblisting.tools"
						:key="tool"
						@click="addTofilterJobLists(tool)"
					>
						{{ tool }}
					</button>
				</div>
			</li>
		</ul>
	</div>
	<div class="attribution" v-if="0">
		Challenge by
		<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
			>Frontend Mentor</a
		>. Coded by <a href="#">Your Name Here</a>.
	</div>
</template>

<script>
import { ref, computed } from "vue";
import JobListings from "./data.json";

export default {
	setup() {
		const joblistings = ref([...JobListings]);
		const filterByTextLists = ref([]);
		const filterJobLists = ref([]);

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

			for (let i = 0; i < jobListing.length; i++) {
				if (filterJobLists.value.includes(jobListing[i])) {
					continue;
				} else {
					console.log("pushing");
					filterJobLists.value.push(jobListing[i]);
					console.log(filterJobLists.value.length);
					console.log(filterJobLists.value);
				}
			}
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
		return {
			filterByTextLists,
			filterJobLists,
			joblistings,

			filterJobListingsBy,
			addTofilterJobLists,
		};
	},
};
</script>

<style></style>