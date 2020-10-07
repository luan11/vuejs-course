import Vue from 'vue'
import VueRouter from 'vue-router'

import Contacts from './views/contacts/Contacts.vue'
import ContactDetails from './views/contacts/ContactDetails.vue'
import ContactsHome from './views/contacts/ContactsHome.vue'
import ContactEdit from './views/contacts/ContactEdit.vue'
import Home from './views/Home.vue'
import Error404 from './views/Error404.vue'
import Error404Contacts from './views/contacts/Error404Contacts.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/contacts',
      component: Contacts,
      alias: '/my-contacts' /* ['/my-contacts', '/contacts-list'] */,
      children: [
        {
          path: 'details/test',
          component: ContactEdit
        },
        {
          name: 'contact',
          path: 'details/:id',
          component: ContactDetails,
          props: true
        },
        {
          name: 'contact-edit',
          path: 'edit/:id',
          alias: 'alter/:id',
          components: {
            default: ContactEdit,
            'contact-details': ContactDetails
          },
          props: {
            default: true,
            'contact-details': true
          }
        },
        {
          name: 'contacts',        
          path: '',
          component: ContactsHome
        },
        {
          path: '*',
          component: Error404Contacts
        },
      ]
    },
    /* {
      path: '/contacts/:id',
      component: ContactDetails
    }, */
    {
      path: '/home',
      component: Home
    },
    /* {
      path: '/',
      redirect: '/contacts'
    }, */
    {
      path: '/',
      redirect: (/* to */) => {
        return {
          name: 'contacts'
        };
      }
    },
    {
      path: '*',
      component: Error404
    }
  ]
});