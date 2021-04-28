<template>
  <div id="app" v-bind:style="{ backgroundColor: color}">
    <Header/>
    <Playlist/>  
    <Request/> 
  </div>
</template>

<script>
import Header from './components/Header'
import Playlist from './views/Playlist'
import Request from './views/Request'

export default {
  name: 'App',
  components: {
    Header,
    Playlist,
    Request
  },
  data() {
    return {
    color: '#3f86e6'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&family=Paytone+One&family=Russo+One&family=Secular+One&display=swap');
</style>
