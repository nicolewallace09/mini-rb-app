<!-- component to store the coming up queue to be ued in the playlist page -->
<template>
  <b-container>
    <div class="title">UP NEXT:</div>

    <b-row align-h="center">
        <div v-for="music, key in queue" :key="key">
            <b-col>
                <div class="music-img">
                    <img class="artwork" :src="music.artwork_small">
                </div>
            </b-col>

            <b-col>
                <div class="music-info">
                    <h6 class="song-title font-weight-bold">{{music.song}}</h6>
                    <p>{{music.artist}}</p>
                    <p>Likes: {{music.likes}}</p>
                    <p>Dislike: {{music.dislikes}}</p>
                </div>
            </b-col>
        </div> 
    </b-row>

  </b-container>
</template>

<script>
export default {
  name: 'ComingUp',
  data() {
    // setting queue to an empty array and adding the json data from the api
    return {
      queue: []
    }
  }, 
  mounted() {
    this.getComingUp()
  }, 
  methods: {
    // fetch api data then using it to store in our data
    getComingUp() {
      fetch('https://api.rockbot.com/v3/engage/now_playing?queue=5', {
        method: 'get',
        headers: {
        Authorization: ''
        }
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.queue = data.response.queue; 
        })
    }
  }
}
</script>

<style scoped>
.artwork {
    border-radius: 20px;
}

/* mobile devices */ 
@media only screen and (max-width: 600px) {
    .artwork {
        height: 5rem;
        width: 5rem;
    }
}
</style>