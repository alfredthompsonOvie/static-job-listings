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
      <img :src="'src/assets/' + joblisting.logo" alt="">
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
          <button v-for="language in joblisting.languages" :key="language">
            {{ language }}
          </button>
          <button v-for="tool in joblisting.tools" :key="tool">
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
      if (filterText.value === "html") {
        return JobListings.filter(job => {
          return job === "html"
        })
        
      }
      return joblistings.value;
    })
    console.log(joblistings );

    return {
      joblistings,
      filterJobBy,
    }
  }
}
</script>

<style>

</style>