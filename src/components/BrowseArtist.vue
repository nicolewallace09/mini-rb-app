<template>
    <div>hello</div>
</template>

<script>
import axios from 'axios'; 

export default {
    name: 'BrowseArtist',
    data() {
    // setting playlist to an empty array and adding the json data from the api
    return {
      browseList: [],    
    }
  }, 
  created() {
    this.getNowPlaying()
    // update getNowPlaying every 30 secs
    setInterval(() => this.getNowPlaying(), 30000)
  }, 
  methods: {
    // fetch api data and getting the json response then to add it to the playlist data
    async getNowPlaying(letter) {
      await axios.get(`https://api.rockbot.com/v3/engage/browse_artists?letter=${letter}`, {
        headers: {
        // requires API key for authorization --  create .env to store key 
        Authorization: process.env.VUE_APP_API_KEY
        }
      })
        .then((res) => {
           this.browseList = res.data.response.now_playing; 
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
</style>
