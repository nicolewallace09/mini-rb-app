<template>
    <main class="signup">
        <form @submit.prevent="signup">
            <v-container>
                <v-row>
                    <v-col col="12">
                        <div class='title'>SIGN UP FOR ROCKBOT</div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col col="12">
                        <input 
                            type="email" 
                            placeholder="email"
                            v-model="email"
                        />
                    </v-col>
                </v-row>
           
                <v-row>
                    <v-col col="12">
                        <input 
                            type="password" 
                            placeholder="password"
                            v-model="password"
                        />
                    </v-col>
                </v-row>
       
                <v-row>
                    <v-col col="6">
                        <v-btn
                            block
                            elevation="2"
                            rounded
                            x-large
                            class="mx-2"
                            color="#3f86e6"
                            type="submit"
                        >
                        Sign Up</v-btn>
                    </v-col>
                </v-row>
              
                <v-row>
                    <v-col col="12">
                        <span>Have A Log In?</span> <router-link to="/login">Log In</router-link>
                    </v-col>
                </v-row>
            </v-container>
        </form>
    </main>
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
main {
    margin-top: 200px;
}

.container { 
    max-width: 500px;
    text-align: center; 
}

.title {
  font-weight: 700;
}

.theme--light.v-btn {
    color: #fff;
}

input {
    border: 2px solid #6e6f70;
    margin: 5px;
    border-radius: 5px;
    width: 100%;
    height: 50px; 
    color: #fff;
    padding: 10px;
}

a:hover {
    text-decoration: none;
}

span {
    margin: 0 auto; 
}
</style>