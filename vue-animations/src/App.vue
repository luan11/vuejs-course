<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animations</h1>
        <p class="lead">Training transitions/animations in elements/components</p>
      </div>
    </div>

    <div class="container">
      <button class="btn btn-primary mb-3"
        @click="show = !show"
      >Toggle</button>
      
      <transition>
        <div class="alert alert-primary" v-if="show">Animations in Vue</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
  .v-enter { /* Estado inicial */
    opacity: 0;
  }

  .v-enter-active { /* Como a animação irá acontecer */
    transition: opacity 1s;
  }

  .v-enter-to { /* Estado final */
    opacity: 1;
  }

  .v-leave {
    opacity: 1;
  }

  .v-leave-active {
    transition: opacity 1s;
  }

  .v-leave-to {
    opacity: 0;
  }
</style>