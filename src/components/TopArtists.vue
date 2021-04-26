<!-- HTML here -->
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

<!-- props here -->
<script>
export default {
  name: 'TopArtists',
  data() {
    // setting playlist to an empty array and adding the json data from the api
    return {
      artists: [],
    //   index: 0
    }
  }, 
  mounted() {
    this.getTopArtists()
  }, 
  methods: {
    // fetch api data and getting the json response then to add it to the playlist data
    getTopArtists() {
      fetch('https://api.rockbot.com/v3/engage/top_artists', {
        method: 'get',
        headers: {
        // adding authorization to make key private 
        Authorization: ''
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

<!-- css here -->
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