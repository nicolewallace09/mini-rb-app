<!-- HTML here -->
<template>
<div>
<div v-for="search, key in searchInfo" :key="key">
{{search.artist}}
</div>
</div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    // setting artists to an empty array and adding the json data from the api
    return {
      searchInfo: [],
      search: ''
    }
  }, 
  mounted() {
    this.getSearchInfo()
  }, 
  methods: {
    // fetch api data and getting the json response to return user's search query
    getSearchInfo() {
      fetch(`https://api.rockbot.com/v3/engage/search_artists?query=justin`, {
        method: 'get',
        headers: {
         // requires API key for authorization --  create .env to store key 
        Authorization: process.env.VUE_APP_API_KEY
        }
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.searchInfo = data.response; 
        })
    }
  }
}
</script>


<!-- css here -->
<style scoped>

</style>