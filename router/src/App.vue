<template>
  <div id="app">
    <div class="jumbotron">
      <h1 class="display-4">Router</h1>
      <p class="lead"><span class="badge badge-info">pt-BR</span> Adicionando rotas a Single Page Applications no Vue.</p>
    </div>

    <div class="container">
      <router-link 
        to="/" 
        class="btn btn-info mb-2 mr-2"
        exact
      >
        Home
      </router-link>
      
      <router-link 
        :to="{ path: '/contacts' }" 
        class="btn btn-info mb-2 mr-2"
      >
        Contacts
      </router-link>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>