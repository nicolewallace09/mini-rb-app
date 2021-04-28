<template>
  <div id="app" v-bind:style="{ backgroundColor: color}">
      <Header/> 

      <router-link to="/">Playlist</router-link>
      <router-link to="/request">Request</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
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
