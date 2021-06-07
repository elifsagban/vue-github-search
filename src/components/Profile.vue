<template>
  
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
</template>

<script>
export default {
    name: "Profile",
    props: ["results"]

}
</script>

<style scoped>

.results img{
  margin: 0 auto;
  width: 200px;
}

</style>