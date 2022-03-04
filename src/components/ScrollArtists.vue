<template>
  <div>
    <v-card
      width="150px"
      color="rgba(42, 53, 66, 0.608)"
    >
    <img
      :src="artwork"
    />
    <span><div class="artist_name">{{name}}</div></span>
      <v-card-actions>
            <v-btn
              text
              icon
              outlined
            >
              <vue-star animate="animated rubberBand" color="#fff">
                <a slot="icon" class="fa fa-plus" @click="requestArtist(request, $event)" method="post"></a>
              </vue-star>
            </v-btn>
          </v-card-actions>
      </v-card>
  </div>
</template>

<script>
import VueStar from "vue-star";
import axios from "axios";

export default {
  name: "ScrollArtists",
  components: {
    VueStar
  }, 
  props: ['artwork', 'name', 'request'],
  methods: {
    // using a post request and passing in artist_id to request artist 
    async requestArtist(artist_id) {
      await axios.post(`https://api.rockbot.com/v3/engage/request_artist?artist_id=${artist_id}`, { artist_id: this.artist_id}, {
        headers: {
          'Accept': 'application/json', 
          // requires API key for authorization --  create .env to store key 
          Authorization: process.env.VUE_APP_API_KEY
        }
      }).then((res) => {
          return res;
      }).catch((error) => {
          console.log(error)
      })
      
    }
  }
}
</script>

<style scoped>
.v-card {
  margin: 10px; 
  padding: 20px;
  text-align: center; 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.v-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

span {
  color: #fff;
  font-weight: 500;
  font-size: 0.7rem;
}

.artist_name {
  width: 150px;
  height: 15px;
  white-space: nowrap ;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.theme--light.v-btn.v-btn--outlined.v-btn--text {
  border: 1px solid #fff;
  position: absolute;
  top: 25px;
  right: 10px;
}

a {
  color: white;
}

a:hover {
  color: #3f86e6;
  text-decoration: none;
}

.title {
  color: #fff; 
  font-weight: 700;
  margin-top: 20px;
  margin-left: 15px;
}
</style>