<template>
  <div id="app" style="background-color: #3f86e6">
      <Header/> 
      <router-view></router-view>
      <b-container name="buttons" style="height:11vh;">
        <b-row>
          <b-col cols="6">
          <b-button block pill variant="light" class="mb-3"><router-link to="/">Playlist</router-link></b-button>
          </b-col>

          <b-col cols="6">
          <b-button block pill variant="light" class="mb-3"><router-link to="/request">Request</router-link></b-button>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&family=Paytone+One&family=Russo+One&family=Secular+One&display=swap');

.buttons {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
