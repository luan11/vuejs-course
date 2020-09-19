import Vue from 'vue'
import VueRouter from 'vue-router'

import Contacts from './views/contacts/Contacts.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/contacts',
      component: Contacts
    },
    {
      path: '/',
      component: Home
    }
  ]
});