<!-- component for displaying the now playing song to be used in the playlist page -->
<template>
  <v-container>
    <div class="title mb-2">NOW PLAYING</div>
    <!-- getting information from playlist array from data() -->
    <v-row>
      <v-col
          cols="12"
          v-bind="playlist"
      >
        <v-card
          class="mx-auto"
          max-width="500"
          max-height="500"
          color="rgba(42, 53, 66, 0.608)"
        >
          <v-img
            :src="playlist.artwork_large"
            gradient="to bottom, transparent, #3f86e6"
          >
          <v-card-title>{{playlist.song}}</v-card-title>
          <v-card-subtitle>{{playlist.artist}}</v-card-subtitle>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "NowPlaying",
  data() {
    // setting playlist to an empty array and adding the json data from the api
    return {
      playlist: [],    
    }
  }, 
  created() {
    this.getNowPlaying()
    // update getNowPlaying every 30 secs
    setInterval(() => this.getNowPlaying(), 30000)
  }, 
  methods: {
    // fetch api data and getting the json response then to add it to the playlist data
    async getNowPlaying() {
      await axios.get("https://api.rockbot.com/v3/engage/now_playing", {
        headers: {
          // requires API key for authorization --  create .env to store key 
          Authorization: process.env.VUE_APP_API_KEY
        }
      }).then((res) => {
          this.playlist = res.data.response.now_playing; 
      }).catch((error) => {
          console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.title {
  font-weight: 700;
}

.v-card__title {
  color: #fff;
  position: absolute;
  bottom: 30px;
  left: 15px;
  font-size: 1rem;
}

.v-card__subtitle{
  color: #fff;
  position: absolute;
  bottom: 15px;
  left: 15px;
  font-size: 0.7rem;
}

</style>