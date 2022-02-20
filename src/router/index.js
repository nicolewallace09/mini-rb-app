import Vue from 'vue';
import VueRouter from 'vue-router';
import Playlist from '@/views/Playlist';
import Request from '@/views/Request';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Playlist",
    component: Playlist
  },
  {
    path: "/request",
    name: "Request",
    component: Request
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router;