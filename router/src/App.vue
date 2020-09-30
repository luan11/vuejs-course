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
        :to="{ path: '/contacts' }" 
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

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>