import Vue from 'vue'

Vue.component('ln-component', {
  data: () => {
    return {
      title: 'VueJS Course'
    }
  },
  template: '<h1>{{ title }}</h1>'
})

new Vue({
  el: '#app'
})
