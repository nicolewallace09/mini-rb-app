import Vue from 'vue'
import Router from 'vue-router'
import Playlist from '@/views/Playlist'
import Request from '@/views/Request'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Playlist',
      component: Playlist
    },
    {
      path: '/request',
      name: 'Request',
      component: Request
    }
  ]
})
