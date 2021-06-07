<template>
  <div id="app">
    <img src="./assets/Octocat.png">
    <Github/>
  </div>
</template>

<script>

import Github from "./views/GitHub.vue"

export default {
  name: 'App',
  components: {
    Github
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app img{
  width: 100px;
}
</style>
