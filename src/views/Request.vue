<!-- page view that contains TopArtists and Search components -->
<template>
  <v-container>
    <Search/>
  </v-container>

</template>

<script>
import Search from "../components/Search";

export default {
  name: "Request",
  components: {
    Search
  }
}
</script>

<style scoped>
/* .container, .container-sm, .container-md {
  max-width: 1500px;
} */
</style>