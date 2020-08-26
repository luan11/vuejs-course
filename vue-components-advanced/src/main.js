import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* Vue.component('Async', resolve => {
  setTimeout(() => {
    resolve({
      template: '<h2>Async component</h2>'
    })
  }, 2000)
}) */

/* Vue.component(
  'Async', 
  () => import('./components/Async.vue')
) */

new Vue({
  render: h => h(App),
}).$mount('#app')
