<!-- HTML here -->
<template>
  <b-container class="mt-3">
    TRENDING ARTISTS
    <TopArtists/>
  </b-container>

</template>

<!-- props here -->
<script>
import TopArtists from '../components/TopArtists'

export default {
  name: 'Request',
  components: {
    TopArtists
  }
}
</script>

<!-- css here -->
<style scoped>

</style>