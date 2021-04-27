<template>
  <div id="app">
    <Header/>
    <!-- <NowPlaying/>  -->
    <ComingUp/>  
    <!-- <Playlist/> -->
    <Request/>
  </div>
</template>

<script>
import Header from './components/Header'
// import NowPlaying from './components/NowPlaying'
import ComingUp from './components/ComingUp'
// import Playlist from './views/Playlist'
import Request from './views/Request'

export default {
  name: 'App',
  components: {
    Header,
    // NowPlaying,
    ComingUp,
    // Playlist,
    Request
  }
}
</script>

<style>

</style>
