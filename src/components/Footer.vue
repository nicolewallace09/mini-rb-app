<!-- footer component to be used in the main app -->
<template>
    <v-footer fixed height="100">
        <v-btn
        elevation="2"
        rounded
        x-large
        class="mx-2"
        color="#3f86e6"
        ><router-link to="/" class="nav-link">Playlist</router-link></v-btn>
        <v-btn
        elevation="2"
        rounded
        x-large
        class="mx-2"
        color="#184274"
        ><router-link to="/request" class="nav-link">Request</router-link></v-btn>
    </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.center {
    margin: 0 auto; 
}

img {
    width: 20%;
}

.nav-link {
    color: #fff;
}

.theme--light.v-footer {
  background:rgba(255, 255, 255, 0.608);
}

.v-footer {
    justify-content: center;
}

/* mobile devices */ 
@media only screen and (max-width: 400px) {
    img {
        width: 50%;
    }
}
</style>