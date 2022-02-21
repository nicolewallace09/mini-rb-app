<template>
    <form @submit.prevent="login">
        <h2>Log In</h2>
        <input 
            type="email" 
            placeholder="email"
            v-model="email"
        />
        <input 
            type="password" 
            placeholder="password"
            v-model="password"
        />
        <button type="submit">Login</button>
        <p>Not Signed Up?</p><router-link to="/signup">Sign Up</router-link>
    </form>
</template>


<script>
import firebase from 'firebase/app';

export default {
  name: "Login",
  data () {
      return {
          email: "",
          password: "",
      }
  },
  methods: {
      login () {
          //logging in user 
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
              alert('Successfully logged in'); 
              this.$router.push('/playlist');
          })
          .catch(error => {
              alert(error.message); 
          }); 
      }
  }
}
</script>

<style scoped>
</style>