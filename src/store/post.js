import { defineStore } from 'pinia'
import { ref, computed, } from 'vue'
import data from '../data.json'

export const usePostStore = defineStore('post', () => {
  // tags
  const selectedTags = ref([]);
  const tags = computed(() => selectedTags.value)
  const NumberOfTags = computed(() => selectedTags.value.length)
  // posts
  const selectedPosts = ref([...data])
  const postLists = computed(() => selectedPosts.value)

  
  const test = ref({
    roles: [],
    levels: [],
    tools: [],
    languages: [],
  });
  
  function addToSelectedFilters(details) {
    const checkTag = selectedTags.value.some((j) => j.title === details.title);
    if (!checkTag) {
      selectedTags.value.push(details)
    }

    selectedTags.value.forEach((tag) => {
      if (tag.category === "roles") {
        test.value.roles[0] = tag.title;
      }
      if (tag.category === "levels") {
        test.value.levels[0] = tag.title;
      }
      if (tag.category === "tools") {
        test.value.tools.push(tag.title);
        if (!test.value.tools.includes(tag.title))
        {
          test.value.tools.push(tag.title);
        }
      }
      if (tag.category === "languages") {
        if (!test.value.languages.includes(tag.title))
        {
          test.value.languages.push(tag.title);
        }
      }

    });

    const result = data.map((r) => {
      if (
        test.value.roles.every(role => role === r.role) &&
        test.value.levels.every(level => level === r.level) &&
        test.value.languages.every(language => r.languages.includes(language)) &&
        test.value.tools.every(tool => r.tools.includes(tool))
      ) {
        
        return r;
      }
    }).filter(x => x!== undefined && x!== null);
    
    
    selectedPosts.value = result;

    
  }
  
  function deleteSelectedFilters(idx) {
    selectedTags.value.splice(idx, 1)
    test.value = {
      roles: [],
      levels: [],
      tools: [],
      languages: [],
    }

    selectedTags.value.forEach((st) => {
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
    const result = data.map(j => {
          if (
          test.value.roles.every(role => role === j.role) &&
          test.value.levels.every(level => level === j.level) &&
          test.value.languages.every(language => j.languages.includes(language)) &&
          test.value.tools.every(tool => j.tools.includes(tool))
        ) {
          return j;
        }
      }).filter(x => x!== undefined && x!== null);
    
    selectedPosts.value = result;
  }
  
  function clearSelectedFilters() {
    selectedTags.value = [];
    test.value = {
				roles: [],
				levels: [],
				tools: [],
				languages: [],
    }
    selectedPosts.value = data
  }
  
// const removeTag = () => {

// }

  return {
    selectedTags,
    tags,
    NumberOfTags,
    postLists,
    addToSelectedFilters,
    deleteSelectedFilters,
    clearSelectedFilters,
  }
})