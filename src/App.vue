<template>
  <div id="app">
    <Header/>
    <!-- <NowPlaying/> 
    <ComingUp/>  -->
    <Playlist/>
  </div>
</template>

<script>
import Header from './components/Header'
// import NowPlaying from './components/NowPlaying'
// import ComingUp from './components/ComingUp'
import Playlist from './views/Playlist'

export default {
  name: 'App',
  components: {
    Header,
    // NowPlaying,
    // ComingUp,
    Playlist
  }
}
</script>

<style>

</style>
