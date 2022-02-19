<!-- component to store the coming up queue to be used in the playlist page -->
<template>
  <v-container class="page">
    <div class="title">COMING UP</div>
    <!-- looping through the queue array to display information --> 
    <v-container class="page-container">
      <v-row dense>
        <v-col cols="12">
          <v-card
            max-width="100%"
            class="mx-auto mb-1"
            v-for="music in queue" :key="music.id"
            color="rgba(42, 53, 66, 0.608)"
          >
          <v-card-title
            class="text-h5"
            v-text="music.song"
          >
          </v-card-title>
          <v-card-subtitle 
            v-text="music.artist"
          >
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              class="mr-1"
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
          <v-avatar
            class="ma-3"
            size="100"
            tile
          >
            <v-img :src="music.artwork_small"></v-img>
          </v-avatar>
          </v-card> 
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import VueStar from 'vue-star';
import axios from 'axios'; 

export default {
  name: 'ComingUp',
  components: {
    VueStar
  },
  data() {
    return {
      queue: [],
      likes: 0,
      dislikes: 0 
    }
  }, 
  created() {
    this.getComingUp()
    this.voteUp()
    this.voteDown()
  }, 
  methods: {
    async getComingUp() {
      // fetch api data then using it to store in our data
      await axios.get('https://api.rockbot.com/v3/engage/now_playing?queue=1', {
        headers: {
          // requires API key for authorization --  create .env to store key 
          Authorization: process.env.VUE_APP_API_KEY
        }
      }).then((res) => {
           this.queue = res.data.response.queue;
      }).catch((error) => {
          console.log(error)
      })
    },
    // using a post request and passing through pick_id to vote on songs 
    async voteUp(pick_id) {
      await axios.post(`https://api.rockbot.com/v3/engage/vote_up?pick_id=${pick_id}`, { likes: this.likes } , {
        headers: {
        'Accept': 'application/json',
        // requires API key for authorization --  create .env to store key 
        Authorization: process.env.VUE_APP_API_KEY
        }
      }).then((res) => {
          console.log(res)
          this.getComingUp();
      }).catch((error) => {
          console.log(error)
      })
    },
    // using a post request and passing through pick_id to vote down songs 
    async voteDown(pick_id) {
        await axios.post(`https://api.rockbot.com/v3/engage/vote_down?pick_id=${pick_id}`, { dislikes: this.dislikes } , {
        headers: {
        'Accept': 'application/json',
        // requires API key for authorization --  create .env to store key 
        Authorization: process.env.VUE_APP_API_KEY
        }
      }).then((res) => {
          console.log(res)
          this.getComingUp();
      }).catch((error) => {
          console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.page-container {
  height: 500px; 
  overflow: scroll;
}

.title {
  font-weight: 700;
}

.v-avatar {
  position: absolute;
  bottom: 20px;
  right: 10px;
}

.v-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.v-card__title {
  font-size: 1rem;
}

.v-card__subtitle{
  font-size: 0.7rem;
}

.v-card__title, .v-card__subtitle, span, .theme--light.v-card > .v-card__subtitle {
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

@media screen and (max-width: 990px) {
  .page-container {
    margin-bottom: 100px;
  }
}

@media screen and (max-width: 600px) {
  .v-card__title {
    font-size: 0.7rem;
  }

  .v-card__subtitle{
    font-size: 0.5rem;
  }
}
</style>