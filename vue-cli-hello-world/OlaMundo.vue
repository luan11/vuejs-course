<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" v-model="title">
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'Hello Vue'
    }
  }
}
</script>

<style>

</style>
