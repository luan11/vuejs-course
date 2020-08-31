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
      
      <transition name="slide" type="animation">
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
  /* Estado inicial */
  .fade-enter, .fade-leave-to { 
    opacity: 0;
  }

  /* Como a animação irá acontecer */
  .fade-enter-active, .fade-leave-active { 
    transition: opacity 1s;
  }

  /* Estado final */
  /* .fade-enter-to, .fade-leave { 
    opacity: 1;
  } */

  .zoom-enter, .zoom-leave-to {
    transform: scale(0);
  }

  .zoom-enter-active, .zoom-leave-active {
    transition: transform 0.5s;
  }

  .zoom-enter-to, .zoom-leave {
    transform: scale(1);
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide 0.7s;
    transition: opacity 0.7s;
  }

  .slide-enter-to {
    opacity: 1;
  }

  .slide-leave {
    opacity: 1;
  }

  .slide-leave-active {
    animation: slide 0.7s reverse;
    transition: opacity 2s;
  }

  .slide-leave-to {
    opacity: 0;
  }

  @keyframes slide {
    0% {
      transform: translateX(-100px);
    }

    100% {
      transform: translateX(0);
    }
  }
</style>