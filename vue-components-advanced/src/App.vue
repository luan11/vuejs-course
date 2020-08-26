<template>
  <div id="app" class="container">
    <h1>Vue - Dynamic Components</h1>

    <button @click="selected = 'Home'">Home</button>
    <button @click="selected = 'PostsList'">Posts</button>
    <button @click="selected = 'About'">About</button>
    <button @click="selected = 'Async'">Async</button>

    <!-- include="" => Inclui o item= que deve se manter criado -->
    <!-- exclude="" => Exclui os itens que não devem se manter criados -->
    <!-- max="" => Manter um certo numero de instancias em cache -->
    <keep-alive :max="2">
      <component 
        :is="selected"
        v-bind="currentProps"
      >
      </component>
    </keep-alive>

   <!--  <h2>Padrão</h2>
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

    <h2>Com v-slot</h2>
    <PostsList
      :posts="posts"
      v-slot="{ myPost }"
    >
      <h2>{{ myPost.title }}</h2>
      <p>{{ myPost.content }}</p>
      <small>{{ myPost.author }}</small>
    </PostsList> -->
  </div>
</template>

<script>
import About from './components/About'
import Home from './components/Home'
import PostsList from './components/PostsList'

export default {
  components: {
    Async: () => import('./components/Async.vue'),
    About,
    Home,
    PostsList
  },
  data() {
    return {
      selected: 'Home',
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
  },
  computed: {
    currentProps() {
      return this.selected === 'PostsList' ? { 'posts': this.posts } : {}
    }
  },
}
</script>

<style scoped>
  .container {
    width: 960px;
    margin: auto;
  }
</style>