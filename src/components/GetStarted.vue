<template>
    <v-container class="align-center justify-center">
        <v-row justify="center">
            <v-col col="12">
                <img src="../../src/assets/roundlogo.png" alt="rounded rockbot logo"/>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col col="12">
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
            <!-- </v-col>
            <v-col col="12"> -->
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
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    height: 100vh;
    position: relative;
}

.row  {
    margin: 0;
    position: absolute;
    top: 25%;
    -ms-transform: translateY(-25%);
    transform: translateY(-25%);
}

.row + .row {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

.nav-link {
    color: #fff; 
}

img {
    max-width: 200px;
    max-height: 200px;  
}
</style>