<template>
  <div class="search">
    <input 
     type="text"
     placeholder="enter a github username" 
     @input="onSearch"
     v-model="query" />
    <br/>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
      return {
          query: null
      }
  },

  methods: {
      onSearch() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
        this.sendQuery();
      }, 1000)
      },

      sendQuery() {
          this.$emit('query', this.query);
      }
  }
};
</script>

<style></style>
