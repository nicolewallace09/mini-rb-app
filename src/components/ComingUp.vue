<!-- component to store the coming up queue to be used in the playlist page -->
<template>
  <b-container class="mt-2">
    <div class="title">UP NEXT:</div>

    <!-- looping through the queue array to display information --> 
    <div v-for="music, key in queue" :key="key">
      <b-card>
        <b-row>
          <b-col cols="2">
            <div class="music-img">
              <img class="artwork" :src="music.artwork_small">
            </div>
          </b-col>

          <b-col cols="8">
            <div class="music-info">
              <p class="song-title font-weight-bold">{{music.song}}</p>
              <p class="song-artist font-style-italic">{{music.artist}}</p>
            </div>
          </b-col>

          <b-col cols="2">
            <div class="music-poll">
              <p><img src="https://img.icons8.com/cotton/64/000000/facebook-like--v1.png" id="icon"/> {{music.likes}}</p>
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
        // requires API key for authorization --  create .env to store key 
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
  border-radius: 10px;
  margin-left: 5rem;
  margin-top: 1rem;
  height: 5rem;
  width: 5rem;
}

.container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  overflow: auto;
}

p {
  line-height: 1px;
  font-size: 1rem;
  color: #fff;
}

.title {
  color: #fff; 
  font-weight: 500;
  font-family: 'Secular One', sans-serif;
  font-size: 1.1rem;
}

#icon {
  height: 1.5rem;
  width: 1.5rem;
}

.card {
  margin-bottom: 1rem;
  background-color: #3f86e6;
  box-shadow: 5px 5px 2px 1px #184274;  
  text-overflow: ellipsis;
}

.music-info {
  margin: 5rem;
}

.music-poll {
  margin-top: 5rem;
  margin-left: -1.5rem;
}

/* mobile devices */ 
@media only screen and (max-width: 770px) {
  .artwork {
    height: 3rem;
    width: 3rem;
    margin-left: -0.5rem;
    margin-top: 0rem;
  }

  p {
    line-height: 0.2px;
    font-size: 0.3rem;
  }

  #icon {
    height: 0.9rem;
    width: 0.9rem;
  }

  .music-info {
    margin: 1rem;
    /* margin-left: 1rem; */
  }

  .music-poll {
    margin-top: 1rem;
    margin-left: -0.5rem;
  }
}
</style>