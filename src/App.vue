<template>
  <div id="app" style="background-color: #3f86e6">
      <Header/> 
      <router-view></router-view>
      <b-container name="buttons" style="height:11vh;">
        <b-row>
          <b-col cols="6">
          <router-link to="/" class="nav-link">Playlist</router-link>
          </b-col>

          <b-col cols="6">
          <router-link to="/request" class="nav-link">Request</router-link>
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

.nav-link {
  text-decoration: none;
  background-color: #184274;
  color: #fff;
  text-align: center;
  border-radius: 20px;
}

.nav-link:hover{
  color: #3f86e6;
}

a.router-link-exact-active {
  color: #184274;
  background-color: #fff;
}

</style>
