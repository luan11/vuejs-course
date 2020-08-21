import Vue from 'vue'

/* const data = {
  title: 'VueJS Course',
  count: 0
}; */

/**
 * Este é um component global
 */
/* Vue.component('ln-component', {
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
}) */

/**
 * Component local
 */
const lnComponent = {
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
};

new Vue({
  el: '#app1',
  components: {
    'ln-component': lnComponent
  }
})
/**
 * Fim Component local
 */

new Vue({
  el: '#app2'
})