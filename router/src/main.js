import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Contacts from './views/contacts/Contacts.vue'
import Home from './views/Home.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
