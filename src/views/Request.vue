<!-- page view that contains TopArtists and Search components -->
<template>
  <main class="request">
    <Header/>
    <v-container>
      <Search/>
    </v-container>
    <Footer/>
  </main>
</template>

<script>
import Search from "../components/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Request",
  components: {
    Search,
    Header,
    Footer
  }
}
</script>

<style scoped>
/* .container, .container-sm, .container-md {
  max-width: 1500px;
} */
</style>