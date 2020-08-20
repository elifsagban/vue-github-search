<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form v-on:submit.prevent= "queryGitHub(query)">
      <input type="text" placeholder="GitHub username " v-model="query">
    </form>
    <br>
    <div class="results" v-if="results">

      <img v-bind:src="results.avatar_url"/>
      <h2> {{ results.name }}</h2>
      <div> {{ results.bio }}</div><br>
      <div> {{ results.location }}</div><br>
      <div v-if="results.followers">Followers: {{ results.followers }}</div>
      <div v-if="results.following">Following: {{ results.following }}</div><br>
      <a v-if="results.blog" v-bind:href="results.blog"> Go to the website</a>
      {{ results.message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'GitHub',
  data () {
    return {
      msg: 'GitHub Search',
      query: '',
      results: null
    }
  },
  methods: {
    queryGitHub(q) {
      let self = this;
      fetch('https://api.github.com/users/' + q)
      .then((j) => {
        return j.json();
      })
      .then((r) => {
        console.log(r);
        self.results = r;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.results img{
  margin: 0 auto;
  width: 200px;
}
</style>
