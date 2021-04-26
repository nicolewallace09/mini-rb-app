<!-- component for displaying the now playing song to be used in the playlist page -->
<template>
  <b-container>
    <div v-for="music, key in playlist" :key="key">
      <div class="music-info">
          <img class="artwork" :src="music.artwork_small">
          <h6 class="song-title font-weight-bold">{{music.song}}</h6>
          {{music.artist}}
          {{music.likes}}
          {{music.dislikes}}
      </div>
    </div> 
  </b-container>
</template>

<script>
export default {
  name: 'NowPlaying',
  data() {
    // setting playlist to an empty array and adding the json data from the api
    return {
      playlist: [],
      // index: 0
    }
  }, 
  mounted() {
    this.getNowPlaying()
  }, 
  methods: {
    // fetch api data and getting the json response then to add it to the playlist data
    getNowPlaying() {
      fetch('https://api.rockbot.com/v3/engage/now_playing', {
        method: 'get',
        headers: {
        // adding authorization to make key private 
        Authorization: process.env.VUE_APP_API_KEY
        }
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.playlist = data.response; 
        })
    }
  }
}
</script>

<style scoped>
.artwork {
    border-radius: 20px;
}

</style>