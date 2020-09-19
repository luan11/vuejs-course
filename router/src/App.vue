<template>
  <div id="app">
    <div class="jumbotron">
      <h1 class="display-4">Router</h1>
      <p class="lead"><span class="badge badge-info">pt-BR</span> Adicionando rotas a Single Page Applications no Vue.</p>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>