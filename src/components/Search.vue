<!-- component containing search bar and result cards -->
<template>
   <b-container>
    <!-- search input that takes in search term passed from getSearchInfo() -->
    <input placeholder="SEARCH FOR ARTISTS..." v-model="search" @input="getSearchInfo" class="mb-3">


    <!-- looping through the search results to display information that user searched --> 
    <div v-for="search in searchInfo" :key="search.artist_id" class="search-results mt-3">
      <b-card>
        <b-row>
          <b-col cols="2">
            <div class="music-img">
              <img class="artwork" :src="search.artwork_small">
            </div>
          </b-col>

          <b-col cols="8">
            <div class="music-info">
              <p class="song-title font-weight-bold">{{search.song}}</p>
              <p class="song-artist font-style-italic">{{search.artist}}</p>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </div> 
  </b-container>
</template>

<script>
export default {
  name: 'Search',
  data() {
    // setting artists to an empty array and adding the json data from the api
    return {
      searchInfo: [],
      search: ''
    }
  }, 
  mounted() {
    this.getSearchInfo()
  }, 
  methods: {
    // fetch api data and getting the json response to return user's search query
    getSearchInfo() {
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
        })
    }
  }
}
</script>

<style scoped>
.artwork {
  border-radius: 10px;
  margin-left: 5rem;
  margin-top: 1rem;
  height: 5rem;
  width: 5rem;
}

.container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  overflow: auto;
}

p {
  line-height: 1px;
  font-size: 1rem;
  color: #184274
}

.title {
  color: #fff; 
  font-weight: 500;
  font-family: 'Secular One', sans-serif;
  font-size: 1.1rem;
}

#icon {
  height: 1.5rem;
  width: 1.5rem;
}

input {
  background-color: #3f86e6;;  
  border: none;
  color: #fff;
  font-family: 'Secular One', sans-serif;
  width: 100%;
}

input::placeholder {
  color: #fff;
  border: 5px black;
}

input:focus {
  border-color: #184274;
}

.card {
  margin-bottom: 1rem;
  background-color: #3f86e6;
  box-shadow: 5px 5px 2px 1px #184274;  
  text-overflow: ellipsis;
}

.music-info {
  margin: 5rem;
}

.music-poll {
  margin-top: 5rem;
  margin-left: -1.5rem;
}

.search-results {
  overflow: scroll;
}

/* mobile devices */ 
@media only screen and (max-width: 770px) {
  .artwork {
    height: 3rem;
    width: 3rem;
    margin-left: -0.5rem;
    margin-top: 0rem;
  }

  p {
    line-height: 0.2px;
    font-size: 0.3rem;
  }

  #icon {
    height: 0.9rem;
    width: 0.9rem;
  }

  .music-info {
    margin: 1rem;
    /* margin-left: 1rem; */
  }

  .music-poll {
    margin-top: 1rem;
    margin-left: -0.5rem;
  }
}
</style>