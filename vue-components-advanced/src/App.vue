<template>
  <div id="app" class="container">
    <h1>Vue</h1>

    <h2>Padrão</h2>
    <PostsList
      :posts="posts"
    />

    <h2>Slots com escopo</h2>
    <PostsList
      :posts="posts"
    >
      <template slot-scope="{ myPost }">
        <h2>{{ myPost.title }}</h2>
        <p>{{ myPost.content }}</p>
        <small>{{ myPost.author }}</small>
      </template>
    </PostsList>
  </div>
</template>

<script>
import PostsList from './components/PostsList'

export default {
  components: {
    PostsList
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Post 1',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nobis, ipsum, quas accusantium et modi libero eum sequi quisquam in eligendi adipisci ullam eos ad suscipit iusto? Alias, iste voluptate.',
          author: 'Luan Novais'
        },
        {
          id: 2,
          title: 'Post 2',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nobis, ipsum, quas accusantium et modi libero eum sequi quisquam in eligendi adipisci ullam eos ad suscipit iusto? Alias, iste voluptate.',
          author: 'Luan Novais'
        }
      ]
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