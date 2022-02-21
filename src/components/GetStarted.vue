<template>
    <v-container>
        <v-row>
            <v-col col="12">
                <img src="../../src/assets/roundlogo.png" alt="rounded rockbot logo"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col col="3">
                <v-btn
                elevation="2"
                rounded
                x-large
                outlined
                class="mx-2"
                color="#fff"
                >
                    <router-link to="/signup" class="nav-link">Sign Up</router-link>
                </v-btn>
            </v-col>

            <v-col col="3">
                <v-btn
                elevation="2"
                rounded
                x-large
                outlined
                class="mx-2"
                color="#fff"
                >
                    <router-link to="/login" class="nav-link">Log In</router-link>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'GetStarted'
}
</script>

<style scoped>
.v-container {
    justify-content: center;
}
.nav-link {
    color: #fff; 
}

img {
    max-width: 150px;
    max-height: 150px;
}
</style>