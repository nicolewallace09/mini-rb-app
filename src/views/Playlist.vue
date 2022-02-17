<!-- page view that contains NowPlaying and ComingUp components -->
<template>
  <b-container style="background-color: #fff">
    <NowPlaying/>
    <ComingUp/>
  </b-container>
</template>

<script>
import ComingUp from '../components/ComingUp'
import NowPlaying from '../components/NowPlaying'

export default {
  name: 'Playlist',
  components: {
    ComingUp,
    NowPlaying
  }
}
</script>

<style scoped>
</style>