<template>
  <div id="app" v-bind:style="{ backgroundColor: color}">
    <Header/>
    <!-- <NowPlaying/>  
    <ComingUp/> --> 
    <Playlist/>  
    <!-- <Request/>  -->
  </div>
</template>

<script>
import Header from './components/Header'
// import NowPlaying from './components/NowPlaying'
// import ComingUp from './components/ComingUp'
import Playlist from './views/Playlist'
// import Request from './views/Request'

export default {
  name: 'App',
  components: {
    Header,
    // NowPlaying,
    // ComingUp,
    Playlist
    // Request
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
