<template>
  <div class="top-bg"></div>
  <div class="container">
    <ul>
      <li 
      v-for="joblisting in filterJobBy" 
      :key="joblisting.id"
      class="job"
      :class="{ featuredJob: joblisting.featured }"
      >
      <img :src="'src/assets/' + joblisting.logo" alt="" class="company_logo">
      <div class="jobDetails">
        <header>
          <span class="company">
            {{ joblisting.company }}
          </span>
          <span v-if="joblisting.new" class="new">
            new!
          </span>
          <span v-if="joblisting.featured" class="feature">
          featured
          </span>
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
          @click="filterText = joblisting.role">
            {{ joblisting.role }}
          </button>
          <button 
          v-if="joblisting.level"
          @click="filterText = joblisting.level"
          >
            {{ joblisting.level }}
          </button>
          <button 
          v-for="language in joblisting.languages" 
          :key="language"
          @click="filterText = language"
          >
            {{ language }}
          </button>
          <button 
          v-for="tool in joblisting.tools" 
          :key="tool"
          @click="filterText = tool"
          >
            {{ tool }}
          </button>
        </div>
      </li>
    </ul>
  </div>
  <div class="attribution" v-if="0">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import JobListings from './data.json';

export default {
  setup () {
    const joblistings = ref([...JobListings]);
    const filterText = ref("");

    const filterJobBy = computed(() => {
      if (filterText.value.toLocaleLowerCase() === "html") {
        return JobListings.filter(jobListing => {
          return jobListing.languages.includes(filterText.value)
        })
      }
      if (filterText.value.toLocaleLowerCase() === "css") {
        return JobListings.filter(jobListing => {
          return jobListing.languages.includes(filterText.value)
        })
      }
      if (filterText.value.toLocaleLowerCase() === "javascript") {
        return JobListings.filter(jobListing => {
          return jobListing.languages.includes("JavaScript")
        })
      }
      if (filterText.value.toLocaleLowerCase() === "python") {
        return JobListings.filter(jobListing => {
          return jobListing.languages.includes("Python")
        })
      }
      if (filterText.value.toLocaleLowerCase() === "ruby") {
        return JobListings.filter(jobListing => {
          return jobListing.languages.includes("Ruby")
        })
      }
      // tools
      if (filterText.value.toLocaleLowerCase() === "react") {
        return JobListings.filter(jobListing => {
          return jobListing.tools.includes(filterText.value)
        })
      }
      if (filterText.value.toLocaleLowerCase() === "sass") {
        return JobListings.filter(jobListing => {
          return jobListing.tools.includes(filterText.value)
        })
      }
      if (filterText.value.toLocaleLowerCase() === "ruby") {
        return JobListings.filter(jobListing => {
          return jobListing.tools.includes("Ruby")
        })
      }
      if (filterText.value.toLocaleLowerCase() === "ror") {
        return JobListings.filter(jobListing => {
          return jobListing.tools.includes("RoR")
        })
      }
      if (filterText.value.toLocaleLowerCase() === "vue") {
        return JobListings.filter(jobListing => {
          return jobListing.tools.includes("Vue")
        })
      }
      if (filterText.value.toLocaleLowerCase() === "django") {
        return JobListings.filter(jobListing => {
          return jobListing.tools.includes("Django")
        })
      }
      // roles
      if (filterText.value.toLocaleLowerCase() === "frontend") {
        return JobListings.filter(jobListing => {
          return jobListing.role.includes("Frontend")
        })
      }
      if (filterText.value.toLocaleLowerCase() === "backend") {
        return JobListings.filter(jobListing => {
          return jobListing.role.includes(filterText.value)
        })
      }
      if (filterText.value.toLocaleLowerCase() === "fullstack") {
        return JobListings.filter(jobListing => {
          return jobListing.role.includes(filterText.value)
        })
      }

      // levels
      if (filterText.value.toLocaleLowerCase() === "Midweight") {
        return JobListings.filter(jobListing => {
          return jobListing.level.includes("Midweight")
        })
      }
      if (filterText.value.toLocaleLowerCase() === "senior") {
        return JobListings.filter(jobListing => {
          return jobListing.level.includes("Senior")
        })
      }
      if (filterText.value.toLocaleLowerCase() === "junior") {
        return JobListings.filter(jobListing => {
          return jobListing.level.includes("Junior")
        })
      }
      return joblistings.value;
    })
    console.log(joblistings );

    return {
      filterText,
      joblistings,
      filterJobBy,
    }
  }
}
</script>

<style>

</style>