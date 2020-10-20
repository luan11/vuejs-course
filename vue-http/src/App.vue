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
import TasksList from './components/TasksList'

export default {
  components: {
    TasksList
  }
}
</script>