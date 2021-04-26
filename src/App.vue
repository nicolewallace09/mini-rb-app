<template>
  <div id="app">
    <Header/>
    <ComingUp/>
    <!-- <NowPlaying/> -->
  </div>
</template>

<script>
import Header from './components/Header'
import ComingUp from './components/ComingUp'
// import NowPlaying from './components/NowPlaying'

export default {
  name: 'App',
  components: {
    Header,
     // NowPlaying,
    ComingUp,
  }
}
</script>

<style>

</style>
