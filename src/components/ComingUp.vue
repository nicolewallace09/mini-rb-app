<!-- component to store the coming up queue to be used in the playlist page -->
<template>
  <v-container>
    <div class="title mb-2">COMING UP</div>
    <!-- looping through the queue array to display information --> 
    <v-card
      width="600"
      class="mx-auto mt-3"
      v-for="music in queue" :key="music.id"
      color="rgba(42, 53, 66, 0.608)"
    >
    <v-row>
      <v-col lg="12" m="12" s="12" xs="12">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title
              class="text-h5"
              v-text="music.song"
            ></v-card-title>

            <v-card-subtitle v-text="music.artist"></v-card-subtitle>

            <v-card-actions>
              <v-btn
                class="ma-2"
                text
                icon
              >
                <vue-star animate="animated rubberBand" color="#fff">
                  <a slot="icon" class="fa fa-thumbs-up" @click="voteUp(music.pick_id, $event)" method="post" ></a>
                </vue-star>
              </v-btn>
              <span>{{music.likes}}</span>
              <v-btn
                class="ma-2"
                text
                icon
              >
                <vue-star animate="animated rubberBand" color="#fff">
                  <a slot="icon" class="fa fa-thumbs-down" @click="voteDown(music.pick_id, $event)" method="post" ></a>
                </vue-star>
                <!-- <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                </svg> -->
              </v-btn>
              <span>{{music.dislikes}}</span>
            </v-card-actions>
          </div>

          <v-avatar
            class="ma-3"
            size="125"
            tile
          >
            <v-img :src="music.artwork_small"></v-img>
          </v-avatar>
        </div>
      </v-col>
    </v-row>
    </v-card>
  </v-container>
</template>

<script>
import VueStar from 'vue-star'

export default {
  name: 'ComingUp',
  components: {
    VueStar
  },
  data() {
    return {
      queue: []
    }
  }, 
  created() {
    this.getComingUp()
    // this.voteUp()
    // update getComing every 30 secs
    setInterval(() => this.getComingUp(), 1000)
  }, 
  methods: {
    getComingUp() {
      // fetch api data then using it to store in our data
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
        })
    },
    // using a post request and passing through pick_id to vote on songs 
    voteUp(pick_id) {
        fetch(`https://api.rockbot.com/v3/engage/vote_up?pick_id=${pick_id}`, {
        method: 'post',
        headers: {
        'Accept': 'application/json',
        // requires API key for authorization --  create .env to store key 
        Authorization: process.env.VUE_APP_API_KEY
        }
      })
    },
    // using a post request and passing through pick_id to vote down songs 
    voteDown(pick_id) {
        fetch(`https://api.rockbot.com/v3/engage/vote_down?pick_id=${pick_id}`, {
        method: 'post',
        headers: {
        'Accept': 'application/json',
        // requires API key for authorization --  create .env to store key 
        Authorization: process.env.VUE_APP_API_KEY
        }
      })
    }
  }
}
</script>

<style scoped>
.title {
  color: #fff; 
  font-weight: 700;
}

.v-avatar {
  align-items: flex-end;
}

.v-card__title, .v-card__subtitle {
  color: #fff; 
}
</style>