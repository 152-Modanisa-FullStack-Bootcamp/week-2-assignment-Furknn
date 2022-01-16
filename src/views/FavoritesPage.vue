<template>
  <div>
    <Header :favorites="favorites" @searchChanged="changedSearch"></Header>
    <div id="video-list">
      <FavoriteVideo v-for="video in favorites" :key="video.id" :video="video"></FavoriteVideo>
    </div>
  </div>
</template>

<script>
import API from "@/api";
import FavoriteVideo from "@/components/FavoriteVideo";
import Header from "@/components/Header";

export default {
  name: "FavoritesPage",
  components: {Header, FavoriteVideo},
  data() {
    return {
      favorites: []
    }
  },
  async mounted() {
    const videos = await API.getVideosList()
    this.favorites = videos.filter(v => v.favorite === true)
    console.log(this.favorites)

  }
}
</script>

<style scoped>

</style>