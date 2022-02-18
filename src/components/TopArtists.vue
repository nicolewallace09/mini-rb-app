<!-- component to display top artisted to be used in the request page -->
<template>
  <v-container class="container">
    <v-card
      width="400px"
      height="300px"
      v-for="artist in artists" :key="artist.id"
      color="rgba(42, 53, 66, 0.608)"
    >
    <v-img
      height="200px"
      width="200px"
      :src="artist.artwork_small"
    >
    </v-img>
    <span>{{artist.artist}}</span>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'TopArtists',
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
    getTopArtists() {
      fetch('https://api.rockbot.com/v3/engage/top_artists', {
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
          this.artists = data.response; 
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.v-card {
  padding: 20px;
  margin: 10px;
}

.v-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

span {
  color: #fff;
  font-weight: 500;
}

</style>