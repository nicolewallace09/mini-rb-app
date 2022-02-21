<!-- component containing search bar and result cards -->
<template>
  <v-container>
    <v-row>
      <v-col col="12"> 
        <!-- search input that takes in search term passed from getSearchInfo() -->
        <form>
          <input type="text" name="search" placeholder="Search for Artist..." v-model="search" @input="getSearchInfo"  >
        </form>
      </v-col>
    </v-row>
    <v-row>
      <div class="title">TRENDING ARTISTS</div>
        <TopArtists/>
    </v-row> 
    <v-row>
      <v-col col="12">
        <div class="searchTerm">{{ search ? `SEARCH RESULTS FOR "${search.toUpperCase()}"` : null }}</div>
        <div class="card-container">
          <!-- looping through the search results to display information that user searched --> 
          <v-card
            width="150px"
            v-for="search in filteredResults" :key="search.id" 
            color="rgba(42, 53, 66, 0.608)"
          >
          <img
            :src="search.artwork_small"
          />
          
          <span><div class="artist_name">{{search.artist}}</div></span>

          <v-card-actions>
            <v-btn
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
  </v-container>
</template>

<script>
import VueStar from "vue-star";
import axios from "axios";
import TopArtists from './TopArtists';

export default {
  name: "Search",
    components: {
    VueStar,
    TopArtists
  },
  data() {
    // setting artists to an empty array and adding the json data from the api
    return {
      searchInfo: [],
      search: '',
      artist_id: 0,
      timeout: null
    }
  }, 
  created() {
    this.getSearchInfo()
    this.requestArtist()
    setTimeout(() => this.getSearchInfo(), 5000)
  }, 
  computed: {
    filteredResults() {
      return this.searchInfo.filter(result =>
        result.artist.toLowerCase().includes(this.search.toLowerCase())
      );
    }
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
          return res;
      }).catch((error) => {
          console.log(error)
      })
      
    }
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  overflow-x: auto;
  margin-bottom: 100px;
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

.v-form > .v-input.theme--light.v-text-field.v-text-field--is-booted {
  color: white;
}

.searchTerm {
  font-weight: 700;
}

input[type=text] {
  width: 100%;
  color: #fff;
  box-sizing: border-box;
  border: 2px solid #fff;
  border-radius: 50px;
  font-size: 16px;
  background-color: rgba(42, 53, 66, 0.608);
  background-image: url('https://img.icons8.com/external-dreamstale-lineal-dreamstale/20/000000/external-search-ui-dreamstale-lineal-dreamstale.png');
  background-position: 12px 12px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
}

.title {
  color: #fff; 
  font-weight: 700;
  margin-top: 20px;
  margin-left: 15px;
}
</style>
