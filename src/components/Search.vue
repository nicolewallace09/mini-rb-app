<!-- component containing search bar and result cards -->
<template>
  <v-container>
    <v-row>
      <v-col col="12"> 
        <!-- search input that takes in search term passed from getSearchInfo() -->
        <input placeholder="SEARCH FOR ARTISTS..." v-model="search" @input="getSearchInfo" class="mb-1">
      </v-col>

      <v-col col="8">
        <v-container class="container">
          <!-- looping through the search results to display information that user searched --> 
          <v-card
            width="400px"
            height="300px"
            v-for="search in searchInfo" :key="search.id" 
            color="rgba(42, 53, 66, 0.608)"
          >
          <v-img
            height="200px"
            width="200px"
            :src="search.artwork_small"
          >
          </v-img>
          <span>{{search.artist}}</span>

          <v-card-actions>
            <v-btn
              class="mr-1 ml-3"
              text
              icon
              outlined
            >
              <vue-star animate="animated rubberBand" color="#fff">
                <a slot="icon" class="fa fa-plus" @click="getSearchInfo(search.artist_id, $event)" method="post"></a>
              </vue-star>
            </v-btn>
          </v-card-actions>
          </v-card>
        </v-container>
      </v-col>
     </v-row>
  </v-container>
</template>

<script>
import VueStar from 'vue-star'

export default {
  name: 'Search',
    components: {
    VueStar
  },
  data() {
    // setting artists to an empty array and adding the json data from the api
    return {
      searchInfo: [],
      // topSearch: [],
      search: ''
    }
  }, 
  created() {
    this.getSearchInfo()
  }, 
  methods: {
    // using a post request and passing in artist_id to request artist 
    getSearchInfo(artist_id) {
      fetch(`https://api.rockbot.com/v3/engage/request_artist?artist_id=${artist_id}`, {
        method: 'post',
        headers: {
         'Accept': 'application/json', 
         // requires API key for authorization --  create .env to store key 
        Authorization: process.env.VUE_APP_API_KEY
        }
      })
      // fetch api data and getting the json response to return user's search query
      fetch(`https://api.rockbot.com/v3/engage/search_artists?query=${this.search}`, {
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
          this.searchInfo = data.response; 
          // this.topSearch = data.response[0]; 
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

span {
  color: #fff;
  font-weight: 500;
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

input {
  background-color: #fff;  
  border: none;
  color: #184274;
  font-family: 'Secular One', sans-serif;
  width: 100%;
}

input::placeholder {
  color: #184274;
  border: 5px black;
}

input:focus {
  border-color: #184274;
}
</style>
