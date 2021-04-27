<template>
  <div id="app" v-bind:style="{ backgroundColor: color}">
    <Header/>
    <!-- <Playlist/>   -->
    <!-- <Request/>  -->
    <Search/>
  </div>
</template>

<script>
import Header from './components/Header'
// import Playlist from './views/Playlist'
// import Request from './views/Request'
import Search from './components/Search'

export default {
  name: 'App',
  components: {
    Header,
    // Playlist,
    // Request
    Search
  },
  data() {
    return {
    color: '#3f86e6'
    }
  }
}
</script>

<style>
</style>
