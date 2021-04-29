<!-- component to store the coming up queue to be used in the playlist page -->
<template>
  <b-container class="mb-2">
    <div class="title">UP NEXT:</div>

    <!-- looping through the queue array to display information --> 
    <div v-for="music in queue" :key="music.id">
      <b-card>
        <b-row>
          <b-col cols="2">
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

          <b-col cols="3">
            <div class="music-poll">
              <button v-bind="vote" @click="voteUp(vote.pick_id, $event)" method="post"><img src="https://img.icons8.com/cotton/64/000000/facebook-like--v1.png" id="icon"/></button><p class="likes">{{music.likes}}</p>
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
      queue: [],
      vote: []
    }
  }, 
  mounted() {
    this.getComingUp(),
    this.voteUp()
  }, 
  methods: {
    // fetch api data then using it to store in our data
    getComingUp() {
      fetch('https://api.rockbot.com/v3/engage/now_playing?queue=1', {
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
          console.log(this.queue)
        })
    },
    voteUp(pick_id) {
        fetch(`https://api.rockbot.com/v3/engage/vote_up?pick_id=${pick_id}`, {
        method: 'post',
        headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
        // requires API key for authorization --  create .env to store key 
        Authorization: process.env.VUE_APP_API_KEY
        }
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.vote = data.response;
          console.log(this.vote)
        })
    }
  }
}
</script>

<style scoped>
.artwork {
  border-radius: 10px;
  margin-left: 5rem;
  margin-top: 3rem;
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
  font-size: 1rem;
  color: #184274;
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
}

.music-poll > .likes {
  margin-top: -0.5rem;
}

button {
  background: none;
  border: none; 
  margin-left: -2rem;
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