<!-- page view that contains TopArtists and Search components -->
<template>
  <v-container>
    <div class="title">TRENDING ARTISTS</div>
    <TopArtists/>
    <Search/>
  </v-container>

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
  color: #fff; 
  font-weight: 700;
}
</style>