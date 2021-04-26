<!-- component to store the coming up queue to be used in the playlist page -->
<template>
  <b-container class="mt-2">
    <div class="title">UP NEXT:</div>

    <div v-for="music, key in queue" :key="key">
      <b-card>
        <b-row>
          <b-col cols="3">
            <div class="music-img">
              <img class="artwork" :src="music.artwork_small">
            </div>
          </b-col>

          <b-col cols="7">
            <div class="music-info">
              <p class="song-title font-weight-bold">{{music.song}}</p>
              <p class="song-artist font-style-italic">{{music.artist}}</p>
            </div>
          </b-col>

          <b-col cols="2">
            <div class="music-poll">
              <p>L {{music.likes}}</p>
              <p>D {{music.dislikes}}</p>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </div> 
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
        Authorization: process.env.VUE_APP_API_KEY
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
  border: 2px red;
}

p {
  line-height: 0.2px;
  font-size: 1rem;
}

.card {
  margin-bottom: 1rem;
}

.music-info {
  margin: 5rem;
  
}

.music-poll {
  margin-top: 5rem;
  margin-left: -1.5rem;
}

/* mobile devices */ 
@media only screen and (max-width: 600px) {
  .artwork {
    height: 5rem;
    width: 5rem;
  }

  p {
    line-height: 0.2px;
    font-size: 0.7rem;
  }

  .music-info {
    margin: 1.5rem;
  }

  .music-poll {
    margin-top: 1.5rem;
    margin-left: -1.5rem;
  }
}
</style>