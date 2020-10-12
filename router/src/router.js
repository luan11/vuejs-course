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

const parseIdParam = route => ({
  id: parseInt(route.params.id)
});

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/contacts',
      component: Contacts,
      alias: '/my-contacts' /* ['/my-contacts', '/contacts-list'] */,
      props: (route) => {
        const kw = route.query.kw;

        return kw ? { kw } : {};
      },
      children: [
        {
          path: 'details/test',
          component: ContactEdit
        },
        {
          name: 'contact',
          path: 'details/:id(\\d+)',
          component: ContactDetails,
          props: parseIdParam
        },
        {
          name: 'contact-edit',
          // path: 'edit/:id(\\d+)/:optional?', // optional param
          // path: 'edit/:id(\\d+)/:zeroOrMore*', // zero or more optional params
          // path: 'edit/:id(\\d+)/:oneOrMore+', // one or more optional params
          path: 'edit/:id(\\d+)',
          alias: 'alter/:id(\\d+)',
          beforeEnter(to, from, next) {
            console.log('beforeEnter');

            if(to.query.authenticated === 'true') {
              next();
              return;
            }

            next('/contacts');
          },
          components: {
            default: ContactEdit,
            'contact-details': ContactDetails
          },
          props: {
            default: parseIdParam,
            'contact-details': parseIdParam
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

router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  next();
});

router.afterEach((to, from) => {
  console.log('afterEach');
  console.log('to', to);
  console.log('from', from);
});

export default router;