<!-- header component to be used in the main app -->
<template>
    <v-app-bar
        color="rgb(42, 53, 66)"
        dense
        height="80"
      >
        <v-toolbar-title><img src="../../src/assets/logo.png" class="center d-inline-block align-self-center" alt="rockbot-logo"></v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <a href="/browseartist">Browse Artists</a> -->
        <v-button @click="logout">Logout</v-button>
    </v-app-bar>
</template>

<script>
import firebase from "firebase/app"; 

export default {
  name: "Header",
  methods: {
      logout () {
          firebase.auth().signOut().then(() => {
              console.log('Successfully logged out.')
              this.$router.push("/");
          })
          .catch(error => {
              console.log(error.message); 
              this.$router.push("/");
          });
      }
  }
}
</script>

<!-- Rockbot blue #3f86e6-->
<style scoped>
img {
    width: 200px;
}

.theme--light.v-sheet {
    color: #fff;
    text-decoration: none;
}

.theme--light.v-sheet:hover {
    color: #3f86e6;
    text-decoration: none;
}

.v-btn {
    margin-left: 10px;
}

</style>
