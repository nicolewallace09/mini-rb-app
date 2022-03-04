<!-- component to display top artist to be used in the request page -->
<template>
  <div class="container">
    <ScrollArtists
      v-for="artist in artists"
      v-bind:key="artist.id"
      v-bind:name="artist.artist"
      v-bind:request="artist.artist_id"
      v-bind:artwork="artist.artwork_small"
    ></ScrollArtists>
  </div>
</template>

<script>
import axios from "axios";
import ScrollArtists from './ScrollArtists.vue';

export default {
  name: "TopArtists",
  components: {
    ScrollArtists
  },
  data() {
    // setting artists to an empty array and adding the json data from the api
    return {
      artists: []
    }
  }, 
  created() {
    this.getTopArtists()
  }, 
  methods: {
    // fetch api data and getting the json response to return artist info
    async getTopArtists() {
      await axios.get("https://api.rockbot.com/v3/engage/top_artists", {
        headers: {
          // requires API key for authorization --  create .env to store key 
          Authorization: process.env.VUE_APP_API_KEY
        }
      }).then((res) => {
          this.artists = res.data.response; 
      }).catch((error) => {
          console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  overflow-x: auto;
} 
</style>