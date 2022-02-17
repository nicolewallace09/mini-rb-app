<!-- page view that contains TopArtists and Search components -->
<template>
  <b-container style="background-color: #fff">
    <div class="title">TRENDING ARTISTS</div>
    <TopArtists/>
    <Search/>
  </b-container>

</template>

<script>
import TopArtists from '../components/TopArtists'
import Search from '../components/Search'

export default {
  name: 'Request',
  components: {
    TopArtists,
    Search
  }
}
</script>

<style scoped>
.title {
  color: #184274; 
  font-weight: 500;
  font-family: 'Secular One', sans-serif;
  font-size: 1.1rem;
}

</style>