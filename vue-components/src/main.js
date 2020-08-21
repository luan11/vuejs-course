import Vue from 'vue'

/* const data = {
  title: 'VueJS Course',
  count: 0
}; */

Vue.component('ln-component', {
  data: () => {
    return {
      title: 'VueJS Course',
      count: 0
    };
  },
  methods: {
    increment: function() {
      this.count++;
    }
  },
  template: `
  <div>
    <h1>{{ title }}</h1>
    <button @click="increment">Clicked {{ count }} times</button>
  </div>
  `
})

new Vue({
  el: '#app'
})
