import Vue from 'vue'
import VueRouter from 'vue-router'

import Error404 from './views/Error404.vue'
import Error404Contacts from './views/contacts/Error404Contacts.vue'
import Login from './views/login/Login.vue'

import EventBus from './event-bus'

const Contacts = () => import(/* webpackChunkName: "contacts" */ './views/contacts/Contacts.vue');
const ContactsHome = () => import(/* webpackChunkName: "contacts" */ './views/contacts/ContactsHome.vue');
const ContactDetails = () => import(/* webpackChunkName: "contacts" */ './views/contacts/ContactDetails.vue');
const ContactEdit = () => import(/* webpackChunkName: "contacts" */ './views/contacts/ContactEdit.vue');
const Home = () => import('./views/Home.vue');

Vue.use(VueRouter)

const parseIdParam = route => ({
  id: parseInt(route.params.id)
});

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(savedPosition) {
          return resolve(savedPosition);
        }
    
        if(to.hash) {
          return resolve({
            selector: to.hash
          });
        }
    
        resolve({
          x: 0,
          y: 0
        });
      }, 3000);
    });
  },
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
          meta: {
            authRequired: true
          },
          beforeEnter(to, from, next) {
            console.log('beforeEnter');

            /* if(to.query.authenticated === 'true') {
              return next();
            }

            next('/contacts'); */

            next();
            // next(true) -> Continue
            // next(false) -> Block
            // next('/contacts') -> Redirect
            // next({ name: 'contacts' }) -> Redirect
            // next(new Error(`Access denied: "${to.fullPath}"`)) -> Throw a error
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
    {
      name: 'login',
      path: '/login',
      component: Login
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
  console.log(`Auth required? ${to.meta.authRequired}`);

  const isAuthenticated = EventBus.authenticated;

  if(to.matched.some(route => route.meta.authRequired)) {
    if(!isAuthenticated) {
      next({
        name: 'login',
        query: {
          redirect: to.fullPath
        }
      });

      return;
    }
  }

  next();
});

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve');

  next();
});

router.afterEach((to, from) => {
  console.log('afterEach');
  console.log('to', to);
  console.log('from', from);
});

router.onError(error => {
  console.error(error.message);
});

export default router;