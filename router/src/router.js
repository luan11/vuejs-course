import Vue from 'vue'
import VueRouter from 'vue-router'

import Contacts from './views/contacts/Contacts.vue'
import ContactDetails from './views/contacts/ContactDetails.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/contacts',
      component: Contacts
    },
    {
      path: '/contacts/:id',
      component: ContactDetails
    },
    {
      path: '/',
      component: Home
    }
  ]
});