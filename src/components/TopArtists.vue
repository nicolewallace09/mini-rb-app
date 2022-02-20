<!-- component to display top artisted to be used in the request page -->
<template>
  <div class="container">
    <v-card
      width="150px"
      v-for="artist in artists" :key="artist.id"
      color="rgba(42, 53, 66, 0.608)"
    >
    <img
      :src="artist.artwork_small"
    />
    <span><div class="artist_name">{{artist.artist}}</div></span>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TopArtists",
  data() {
    // setting artists to an empty array and adding the json data from the api
    return {
      artists: []
    }
  }, 
  created() {
    this.getTopArtists()
  }, 
  methods: {
    // fetch api data and getting the json response to return artist info
    async getTopArtists() {
      await axios.get("https://api.rockbot.com/v3/engage/top_artists", {
        headers: {
          // requires API key for authorization --  create .env to store key 
          Authorization: process.env.VUE_APP_API_KEY
        }
      }).then((res) => {
          this.artists = res.data.response; 
      }).catch((error) => {
          console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  overflow-x: auto;
} 

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
  white-space: wrap ;
  word-break: normal;
}
</style>