<template>
  <div class="container">
    <Search @query="queryGit($event)" />

    <div class="profile">
      <Profile :results="results" />
    </div>

    <div class="repo-list">
      <RepoList :repo_results="repo_results" />
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import Profile from "../components/Profile.vue";
import RepoList from "../components/RepoList";
export default {
  name: "GitHub",
  components: {
    Search,
    Profile,
    RepoList
  },
  data() {
    return {
      msg: "GitHub Search",
      query: "",
      results: [],
      repo_results: []
    };
  },
  methods: {
    queryGit(q) {
      Promise.all([
        fetch(`https://api.github.com/users/${q}`).then(res => (res.ok && res.json()) || Promise.reject(res)),
        fetch(`https://api.github.com/users/${q}/repos`).then(res => (res.ok && res.json()) || Promise.reject(res))
      ]).then(data => {
        this.results = data[0];
        this.repo_results = data[1];
        console.log(data[1]);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1,
h2 {
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

.repo-list {
  justify-content: center;
  margin: 0 auto;
}
</style>
