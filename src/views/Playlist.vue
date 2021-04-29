<!-- HTML here -->
<template>
  <b-container style="background-color: #3f86e6">
    <NowPlaying/>
    <ComingUp/>
  </b-container>
</template>

<!-- props here -->
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

<!-- css here -->
<style scoped>
</style>