import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import Vuetify from 'vuetify' 
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueAxios, axios)


new Vue({
  render: h => h(App), router
}).$mount('#app')

