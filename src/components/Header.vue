<!-- header component to be used in the main app -->
<template>
    <v-app-bar
        color="rgb(42, 53, 66)"
        dense
        height="80"
      >
        <v-toolbar-title><a href="/"><img src="../../src/assets/logo.png" class="center d-inline-block align-self-center" alt="rockbot-logo"></a></v-toolbar-title>
        <v-spacer></v-spacer>

        <a a href="/">Log In</a>  

        <v-btn
        outlined
        background="gba(255, 255, 255, 0.608)"
        >
        <a a href="/">Sign Up</a>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name: "Header"
}
</script>

<!-- Rockbot blue #3f86e6-->
<style scoped>
img {
    width: 200px;
}

a {
    color: #fff;
    text-decoration: none;
}

a:hover {
    color: #3f86e6;
    text-decoration: none;
}

.v-btn {
    margin-left: 10px;
}

</style>
