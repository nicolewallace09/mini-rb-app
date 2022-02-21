import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';
import Vuetify from 'vuetify';
import VueAxios from 'vue-axios';
import VueCompositionAPI from '@vue/composition-api'
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAL7nqINYk12nxzOj-dSBBlhlRuoPgi4yo",
  authDomain: "mini-rockbot.firebaseapp.com",
  projectId: "mini-rockbot",
  storageBucket: "mini-rockbot.appspot.com",
  messagingSenderId: "984755682021",
  appId: "1:984755682021:web:6e3b2f838c492dcfb1f20c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.use(VueCompositionAPI);

new Vue({
  render: h => h(App), router
}).$mount('#app')

