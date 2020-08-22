import Vue from 'vue'
// import App from './App.vue'
import MoviesListItem from './components/MoviesListItem.vue'

Vue.config.productionTip = false

new Vue({
  // render: h => h(App),
  components: {
    MoviesListItem
  }
}).$mount('#app')
