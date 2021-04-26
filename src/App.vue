<template>
  <div id="app">
    <Header/>
    <!-- <NowPlaying/> -->
    <!-- <ComingUp/> -->
    <TopArtists/>

  </div>
</template>

<script>
import Header from './components/Header'
// import NowPlaying from './components/NowPlaying'
// import ComingUp from './components/ComingUp'
import TopArtists from './components/TopArtists'

export default {
  name: 'App',
  components: {
    Header,
     // NowPlaying,
    // ComingUp,
    TopArtists
  }
}
</script>

<style>

</style>
