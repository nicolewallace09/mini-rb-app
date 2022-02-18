<!-- component to store the coming up queue to be used in the playlist page -->
<template>
  <v-container>
    <div class="title">COMING UP</div>
    <!-- looping through the queue array to display information --> 
    <!-- <v-container class="comingUp-container"> -->
    <v-card
      max-width="100%"
      class="mx-auto mt-3"
      v-for="music in queue" :key="music.id"
      color="rgba(42, 53, 66, 0.608)"
    >

    <v-row dense>
      <v-col cols="12">
       
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title
              class="text-h5 ml-3"
              v-text="music.song"
            ></v-card-title>

            <v-card-subtitle 
              class="ml-3"
              v-text="music.artist"
            ></v-card-subtitle>

            <v-card-actions>
              <v-btn
                class="mr-1 ml-3"
                text
                icon
                outlined
              >
                <vue-star animate="animated rubberBand" color="#fff">
                  <a slot="icon" class="fa fa-thumbs-up" @click="voteUp(music.pick_id, $event)" method="post" ></a>
                </vue-star>
              </v-btn>
              <span class="ml-1">{{music.likes}}</span>

              <v-btn
                class="mr-1 ml-4"
                text
                icon
                outlined
              >
                <vue-star animate="animated rubberBand">
                  <a slot="icon" class="fa fa-thumbs-down" @click="voteDown(music.pick_id, $event)" method="post" ></a>
                </vue-star>
              </v-btn>
              <span class="ml-1">{{music.dislikes}}</span>
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
    <!-- </v-container> -->
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
        .catch((error) => {
          console.log(error)
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
        .then(() => {
          this.getComingUp();
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
        .then(() => {
          this.getComingUp();
        })
    }
  }
}
</script>

<style scoped>
/* .comingUp-container {
  height: 500px;
  overflow-x: auto;
} */

.title {
  color: #fff; 
  font-weight: 700;
}

.v-avatar {
  position: absolute;
  bottom: 10px;
  right: 50px;
}

.v-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.v-card__title, .v-card__subtitle, span {
  color: #fff; 
}

.theme--light.v-btn.v-btn--outlined.v-btn--text {
  border: 1px solid #fff;
}

a {
  color: white;
}
a:hover {
  color: #3f86e6;
  text-decoration: none;
}

</style>