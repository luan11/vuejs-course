<template>
  <div id="app">
    <div class="jumbotron">
      <h1 class="display-4">Router</h1>
      <p class="lead"><span class="badge badge-info">pt-BR</span> Adicionando rotas a Single Page Applications no Vue.</p>
    </div>

    <div class="container">
      <router-link 
        to="/home" 
        class="btn btn-info mb-4 mr-2"
        exact
      >
        Home
      </router-link>
      
      <router-link 
        to="/contacts" 
        class="btn btn-info mb-4 mr-2"
      >
        Contacts
      </router-link>

     <!--  <router-link 
        :to="{ path: '/contacts/1' }" 
        class="btn btn-info mb-4 mr-2"
      >
        Contact 1
      </router-link>
      
      <router-link 
        :to="{ path: '/contacts/2' }" 
        class="btn btn-info mb-4 mr-2"
      >
        Contact 2
      </router-link> -->

      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  .slide-enter, .slide-leave-to {
    transform: translateX(-50px);
    opacity: 0;
  }

  .slide-enter-active, .slider-leave-active {
    transition: all .3s;
  }
</style>