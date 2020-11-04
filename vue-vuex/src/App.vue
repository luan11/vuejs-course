<template>
  <div id="app">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Vuex</h1>
        </div>
      </div>

      <div class="container">
        <Counter/>
      </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter';

export default {
  components: {
    Counter
  }
}
</script>