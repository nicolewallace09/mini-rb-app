<!-- component containing search bar and result cards -->
<template>
  <div>
    <v-row>
      <v-col col="12"> 
        <!-- search input that takes in search term passed from getSearchInfo() -->
        <!-- <input placeholder="SEARCH FOR ARTISTS..." type="search" v-model="search" @input="getSearchInfo" class="mb-1"> -->
        <v-form>
          <v-container>
            <v-row>
              <v-col
              cols="12"
              >
              <v-text-field
                label="Search for Artists..."
                prepend-inner-icon="mdi-magnify"
                type="search" 
                v-model="search" 
                @input="getSearchInfo" 
                color="pink"
                class="text-left"
              >
              </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>

    <v-row>
      <v-col col="12">
        <div class="card-container">
          <!-- looping through the search results to display information that user searched --> 
          <v-card
            width="250px"
            height="250px"
            v-for="search in searchInfo" :key="search.id" 
            color="rgba(42, 53, 66, 0.608)"
          >
          <v-img
            height="100px"
            width="100px"
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
                <a slot="icon" class="fa fa-plus" @click="requestArtist(search.artist_id, $event)" method="post"></a>
              </vue-star>
            </v-btn>
          </v-card-actions>
          </v-card>
        </div>
      </v-col>
     </v-row>
  </div>
</template>

<script>
import VueStar from 'vue-star';
import axios from "axios";

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
      search: '',
      artist_id: 0
    }
  }, 
  created() {
    this.getSearchInfo()
  }, 
  methods: {
    // fetch api data and getting the json response to return user's search query
    async getSearchInfo() {
      await axios.get(`https://api.rockbot.com/v3/engage/search_artists?query=${this.search}`, {
        headers: {
         // requires API key for authorization --  create .env to store key 
        Authorization: process.env.VUE_APP_API_KEY
        }
      })
        .then((res) => {
           this.searchInfo = res.data.response; 
          //  console.log(this.searchInfo)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // using a post request and passing in artist_id to request artist 
    async requestArtist(artist_id) {
      await axios.post(`https://api.rockbot.com/v3/engage/request_artist?artist_id=${artist_id}`, { artist_id: this.artist_id}, {
        headers: {
          'Accept': 'application/json', 
          // requires API key for authorization --  create .env to store key 
          Authorization: process.env.VUE_APP_API_KEY
        }
      }).then((res) => {
          console.log(res)
      }).catch((error) => {
          console.log(error)
      })
      
    }
  }
}
</script>

<style scoped>
/* .container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
} */

.card-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-height: 500px;
  overflow-y: auto;
  /* align-items: center;
  justify-content: center; */
  /* text-align: center; */
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

.v-form > .v-input theme--light v-text-field v-text-field--is-booted {
  color: white;
}

</style>
