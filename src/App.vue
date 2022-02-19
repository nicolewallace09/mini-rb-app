<template>
  <div id="app">
      <Header/>
      <router-view></router-view>
      <Footer/> 
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app, html {
  background: rgb(42, 53, 66); 
  font-family: 'Roboto', sans-serif;
  color: #fff;
}
</style>




