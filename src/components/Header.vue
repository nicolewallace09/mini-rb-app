<!-- header component to be used in the main app -->
<template>
    <v-app-bar
        color="#3f86e6"
        dense
        height="80"
      >
        <v-toolbar-title><img src="../../src/assets/logo.png" class="center d-inline-block align-self-center" alt="rockbot-logo"></v-toolbar-title>
    </v-app-bar>
</template>




<script>
export default {
  name: 'Header'
}
</script>

<!-- Rockbot blue #3f86e6-->
<style scoped>
.v-app-bar {
    display: flex;
    justify-content: center;
}

img {
    width: 20%;
}

/* mobile devices */ 
@media only screen and (max-width: 400px) {
    img {
        width: 50%;
    }
}
</style>
