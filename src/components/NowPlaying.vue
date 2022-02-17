<!-- component for displaying the now playing song to be used in the playlist page -->
<template>
  <v-container>
    <div class="title">NOW PLAYING</div>
    <!-- getting information from playlist array from data() -->
  
    <v-card
      class="mx-auto"
      max-width="100%"
      v-bind="playlist"
    >
      <v-img
        :src="playlist.artwork_large"
        class="white--text align-end"
        gradient="to bottom, transparent, #184274"
        height="500px"
      >
        <v-card-title>{{playlist.song}}</v-card-title>
        <v-card-subtitle>{{playlist.artist}}</v-card-subtitle>
      </v-img>
    </v-card>
  </v-container>
</template>


  

<script>
export default {
  name: 'NowPlaying',
  data() {
    // setting playlist to an empty array and adding the json data from the api
    return {
      playlist: []
    }
  }, 
  created() {
    this.getNowPlaying()
    // update getNowPlaying every 30 secs
    setInterval(() => this.getNowPlaying(), 30000)
  }, 
  methods: {
    // fetch api data and getting the json response then to add it to the playlist data
    getNowPlaying() {
      fetch('https://api.rockbot.com/v3/engage/now_playing', {
        method: 'get',
        headers: {
        // requires API key for authorization --  create .env to store key 
        Authorization: '2ab742c917f872aa88644bc8f995e03159b2'
        }
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.playlist = data.response.now_playing; 
        })
    }
  }
}
</script>

<style scoped>
.v-card__title, .v-card__subtitle {
  color: #fff;
}
</style>