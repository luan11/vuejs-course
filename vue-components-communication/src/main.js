import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    selectMovie(selectedMovie) {
      this.$emit('selectMovie', selectedMovie)
    },
    updateMovie(movieUpdated) {
      this.$emit('updateMovie', movieUpdated)
    }
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
