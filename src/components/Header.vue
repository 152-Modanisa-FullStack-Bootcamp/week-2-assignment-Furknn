<template>
  <div class="header-container">
    <span id="favorites-button" @click="navigateToFavoritePage">Favorites</span>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    navigateToFavoritePage() {
      this.$router.push("/favorites/bootcamp")
    }
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  background-color: green;
  width: 100%;
  padding: 10px 20px;
  justify-content: flex-end;
  align-items: flex-end;
}

#favorites-button {
  padding: 8px;
  background-color: aqua;
}
</style>