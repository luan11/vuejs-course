<template>
  <div id="app" class="container">
    <h1>Vue</h1>

    <!-- <Post :title="'Components'"/> -->
    <Post>
      <h2 slot="post-header">Components Vue</h2>
      
      <p class="post-p">Lorem ipsum dolor sit amet consectetur.</p>
      <span>...</span>

      <small slot="post-footer">by {{ author }}</small>

      <template slot="button">Detalhes</template>
    </Post>
    <!-- <Post :title="'Data by props'"/> -->
  </div>
</template>

<script>
import Post from './components/Post'

export default {
  components: {
    Post
  },
  data() {
    return {
      author: 'Luan Novais'
    };
  }
}
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
  }
</style>