<template>
  <div class="header-container">
    <input id="search-input" v-model="searchText" type="text">
    <span id="favorites-button" @click="navigateToFavoritePage">Favorites {{ favorites.length }}</span>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["favorites"],
  data() {
    return {
      searchText: ""
    }
  },
  watch: {
    searchText() {
      this.$emit("searchChanged", this.searchText)
    }
  },
  methods: {
    navigateToFavoritePage() {
      this.$router.push("/favorites")
    }
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  background-color: green;
  width: 800px;
  padding: 10px 20px;
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;
}

#search-input {
  height: 50px;
  width: 500px;

}

#favorites-button {
  display: flex;
  padding: 8px;
  background-color: aqua;
}
</style>