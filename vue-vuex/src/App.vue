<template>
  <div id="app">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Vuex</h1>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-9 border-right">
            <TasksList/>
          </div>
          <div class="col-sm-3">
            <Counter/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter'
import TasksList from '@/components/TasksList'

export default {
  components: {
    Counter,
    TasksList
  }
}
</script>