<!-- page view that contains NowPlaying and ComingUp components -->
<template>
  <v-container class="playlistContainer">
    <v-row>
      <v-col lg="6" m="6" s="6" xs="12">
        <NowPlaying/>
      </v-col>
      <v-col lg="6" m="6" s="6" xs="12">
        <ComingUp/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ComingUp from "../components/ComingUp";
import NowPlaying from "../components/NowPlaying";

export default {
  name: "Playlist",
  components: {
    ComingUp,
    NowPlaying
  }
}
</script>

<style scoped>
.playlistContainer {
  margin-top: 20px;
}
</style>