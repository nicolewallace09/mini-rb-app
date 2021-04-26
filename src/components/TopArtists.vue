<!-- component to display top artisted to be used in the request page -->
<template>
  <b-container class="horizontal-scrollable">
    <div class="title">TOP ARTISTS</div>

    <div v-for="artist, key in artists" :key="key">
      <b-row class="scrolling-wrapper row flex-row flex-nowrap mt-1 pb-1 pt-1">
        <b-col cols="7">
          <b-card class="music-info">
            <img class="artwork center" :src="artist.artwork_small">
            <p class="name text-center">{{artist.artist}}</p>
          </b-card>
        </b-col>
      </b-row>
    </div> 
  </b-container>
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
  mounted() {
    this.getTopArtists()
  }, 
  methods: {
    // fetch api data and getting the json response to return artist info
    getTopArtists() {
      fetch('https://api.rockbot.com/v3/engage/top_artists', {
        method: 'get',
        headers: {
        Authorization: process.env.VUE_APP_API_KEY
        }
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.artists = data.response; 
        })
    }
  }
}
</script>

<style scoped>
.artwork {
  border-radius: 50%;
  max-width: 100%;
  height: auto;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.title {
  font-size: 1.5rem;
}

.name {
  color: #3f86e6;
  font-size: 1rem;
}

.scrolling-wrapper{
	overflow-x: auto;
  flex-wrap: nowrap;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: none;
}

/* mobile devices */ 
@media only screen and (max-width: 600px) {
  .name {
    font-size: 0.8rem;
  }

  .title {
    font-size: 1rem;
  }

}

</style>