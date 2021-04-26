<!-- HTML here -->
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

<!-- props here -->
<script>
export default {
  name: 'ComingUp',
  data() {
    // setting playlist to an empty array and adding the json data from the api
    return {
      queue: [],
    //   index: 0
    }
  }, 
  mounted() {
    this.getComingUp()
  }, 
  methods: {
    // fetch api data and getting the json response then to add it to the playlist data
    getComingUp() {
      fetch('https://api.rockbot.com/v3/engage/now_playing?queue=5', {
        method: 'get',
        headers: {
        // adding authorization to make key private 
        Authorization: '2ab742c917f872aa88644bc8f995e03159b2'
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

<!-- css here -->
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