<template>
  <div id="app">
    <h1>Vue</h1>

    <!-- <Post :title="'Components'"/> -->
    <Post>
      <h2>Components Vue</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
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