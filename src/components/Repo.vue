<template>
<div class="card">
<div class="img-repo">
<img src="../assets/coffee.png" alt="coffee github" class="card-img">
</div>
<a :href="repo.html_url" target="_blank" class="card-info"> 
			<h3>{{ repo.name }}</h3>
        </a>
</div></template>

<script>
export default {
  name:"Repo",
  props: ["repo"],

}
</script>

<style>

.img-repo {
  width: 100px;
  height: 100px;
  justify-content: center;
  margin: 0 auto;

}


.card {
	flex: 1 1 25%;
  max-width: 50%;
	padding: 0px 10px;
	margin: 8px; }

.card-info {
  justify-content: center;
  margin: 0 auto;
}

</style>