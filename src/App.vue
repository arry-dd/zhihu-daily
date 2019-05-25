<template>
  <div id="app">
  <keep-alive :exclude="['detail','comment']">
    <router-view></router-view>
  </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>

</style>
