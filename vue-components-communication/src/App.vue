<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Movies List</h1>
        <p class="lead">Communication training between components in Vue</p>
      </div>
    </div>

    <div class="container">
      <MoviesList/>
    </div>
  </div>
</template>

<script>
import MoviesList from './components/MoviesList'

export default {
  name: 'App',
  components: {
    MoviesList
  }
}
</script>
