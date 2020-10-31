<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">HTTP Requests in Vue</h1>
        <p class="lead">Using Axios library</p>
      </div>
    </div>

    <div class="container">
        <TasksList />
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import config from './config/config'

axios.defaults.baseURL = config.api.baseURL

import TasksList from './components/TasksList'

export default {
  components: {
    TasksList
  },
  async created() {
    /* axios.all([
      axios.get('/tasks/1'),
      axios.get('/tasks/3')
    ])
    .then(axios.spread((task1, task3) => {
      console.log(task1, task3)
    })); */

    /* axios.all([
      axios.get('/tasks/1'),
      axios.get('/tasks/3')
    ])
    .then(response => {
      const [task1, task3] = response;

      console.log(task1, task3)
    }); */

    const task1 = await axios.get('/tasks/1');
    const task3 = await axios.get('/tasks/3');

    console.log('Requests')
    console.log(task1, task3);
  }
}
</script>