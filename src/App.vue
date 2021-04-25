<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header/>
    Yes, Nicole this works
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    //HelloWorld
    Header
  }
}
</script>

<style>

</style>
