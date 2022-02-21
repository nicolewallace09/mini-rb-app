<template>
    <form @submit.prevent="signup">
        <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
        <p>Have A Log In?</p><router-link to="/login">Log In</router-link>
    </form>
</template>


<script>
import firebase from 'firebase/app'; 

export default {
  name: "Signup", 
  data() {
      return {
          email: '',
          password: ''
      }
  },
  methods: {
      signup() {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
              alert('Sign up was successful'); 
              this.$router.push('/login');
          })
          .catch(error => {
              alert(error.message);
          })
      }
  }
}
</script>

<style scoped>
</style>