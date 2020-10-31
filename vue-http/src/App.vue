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

        <button 
          class="btn btn-primary mt-4 mb-2"
          @click="downloadImg"
        >
          Download Image
        </button>

        <div class="progress">
          <div 
            class="progress-bar" 
            role="progressbar" 
            :style="{ width: `${progress}%` }" 
            :aria-valuenow="progress" 
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{ progress }} %
          </div>
        </div>

        <div v-if="img">
          <img class="img-fluid" :src="img">
        </div>
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
  data() {
    return {
      progress: 0,
      img: null
    }
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
  },
  methods: {
    downloadImg() {
      axios
        .get('https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
          {
            baseURL: '',
            responseType: 'blob',
            onDownloadProgress: (progressEvent) => {
              this.progress = ((progressEvent.loaded / progressEvent.total) * 100).toFixed(0);
          }
        })
        .then(response => {
          this.img = window.URL.createObjectURL(response.data);
        });
    }
  },
}
</script>