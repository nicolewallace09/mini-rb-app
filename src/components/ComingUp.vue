<!-- component to store the coming up queue to be used in the playlist page -->
<template>
  <v-container>
    <div class="title mb-2">COMING UP</div>
    <!-- looping through the queue array to display information --> 
    <v-card
      max-width="600"
      class="mx-auto mt-3"
      v-for="music in queue" :key="music.id"
      color="#fff"
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
                class="ml-2 mt-3"
                fab
                icon
                height="40px"
                right
                width="40px"
              >
                <!-- <v-icon>mdi-play</v-icon> -->
                X
              </v-btn>
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
export default {
  name: 'ComingUp',
  data() {
    // setting queue to an empty array and adding the json data from the api
      // <v-col cols="2"> 
    //       <div class="music-poll">
    //         <button @click="getComingUp(music.pick_id, $event)" method="post"><img src="https://img.icons8.com/cotton/64/000000/facebook-like--v1.png" id="icon"/></button><p class="likes">{{music.likes}}</p>
    //       </div>
    //     </v-col> 
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
    // using a post request and passing through pick_id to vote on songs 
    getComingUp(pick_id) {
      fetch(`https://api.rockbot.com/v3/engage/vote_up?pick_id=${pick_id}`, {
        method: 'post',
        headers: {
        'Accept': 'application/json',
        // requires API key for authorization --  create .env to store key 
        Authorization: process.env.VUE_APP_API_KEY
        }
      })
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
    }
  }
}
</script>

<style scoped>
.v-avatar {
  align-items: flex-end;
}
</style>