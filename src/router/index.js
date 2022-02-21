import Vue from 'vue';
import VueRouter from 'vue-router';
import Playlist from '@/views/Playlist';
import Request from '@/views/Request';
import Login from "../components/Login"; 
import Signup from "../components/Signup";
import GetStarted from "../components/GetStarted"; 
import BrowseArtist from "../components/BrowseArtist"; 
import firebase from 'firebase';

Vue.use(VueRouter)

const routes = [
  {
    path: "/playlist",
    name: "Playlist",
    component: Playlist,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/request",
    name: "Request",
    component: Request,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  }, 
  {
    path: "/",
    name: "GetStarted",
    component: GetStarted
  },
  {
    path: "/browseartist",
    name: "BrowseArtist",
    component: BrowseArtist
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next({
        path: '/start',
      });
    }
  } else {
    next();
  }
});

export default router;