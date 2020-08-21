import Vue from 'vue'

import App from './App.vue'
// import AppCounter from './AppCounter.vue'

/**
 * Registro Global
 */
// Vue.component('app-counter', AppCounter);

new Vue({
  render: h => h(App)
}).$mount('#app')