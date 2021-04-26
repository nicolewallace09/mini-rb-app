<template>
    <div>
        <b-navbar class="nav">
            <b-navbar-brand href="#" class="mx-auto">
                <span class="nav-text align-self-center">MINI</span>  <img src="../../src/assets/logo.png" class="d-inline-block align-self-center" alt="rockbot-logo">
            </b-navbar-brand>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'Header',
//   props: {
//     msg: String
//   }
}
</script>

<!-- Rockbot blue #3f86e6-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    height: 2.5rem;
    width: 15rem;
}

.nav {
    background-color:#3f86e6; 
    /* position: sticky */
}

.nav-text {
    font-size: 2.5rem;
}

/* mobile devices */ 
@media only screen and (max-width: 600px) {
    img {
        height: 1.6rem;
        width: 10rem;
    }

    .nav-text {
        font-size: 1.3rem;
    }
}

</style>
