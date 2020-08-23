<template>
  <div id="app" class="container">
    <h1>Vue</h1>

    <!-- <Post :title="'Components'"/> -->
    <Post>
      <h2 slot="post-header">Components Vue</h2>
      <template slot="post-content">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <span>...</span>
      </template>
      <small slot="post-footer">by Luan Novais</small>
    </Post>
    <!-- <Post :title="'Data by props'"/> -->
  </div>
</template>

<script>
import Post from './components/Post'

export default {
  components: {
    Post
  }
}
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
  }
</style>