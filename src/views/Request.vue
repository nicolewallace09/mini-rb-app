<!-- HTML here -->
<template>
  <b-container>
    <div class="title">TRENDING ARTISTS</div>
    <TopArtists/>
    <Search/>
  </b-container>

</template>

<!-- props here -->
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
  font-weight: 500;
  font-family: 'Secular One', sans-serif;
  font-size: 1.1rem;
}

</style>