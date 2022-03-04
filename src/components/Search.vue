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
            <ScrollArtists
              v-for="search in searchInfo"
              v-bind:key="search.id"
              v-bind:name="search.artist"
              v-bind:request="search.artist_id"
              v-bind:artwork="search.artwork_small"
            ></ScrollArtists>
          </div>
      </v-col>
     </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import TopArtists from './TopArtists';
import ScrollArtists from './ScrollArtists.vue';

export default {
  name: "Search",
  components: {
    TopArtists,
    ScrollArtists
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
