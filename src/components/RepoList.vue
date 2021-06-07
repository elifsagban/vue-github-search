<template>
  <div class="repo-list">
    <Repo v-for="repo in repo_results" :key="repo.id" :repo="repo" /></div
></template>

<script>
import Repo from "../components/Repo.vue";

export default {
  name: "RepoList",
  props: ["repo_results"],
  components: {
    Repo
  }

};
</script>

<style>
.repo-list {
  margin: 0 auto;
  width: 800px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
</style>
