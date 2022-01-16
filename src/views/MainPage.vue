<template>
  <div>
    <Header :favorites="favorites" @searchChanged="changedSearch"></Header>
    <div id="video-list">
      <Video v-for="video in videos" :key="video.id" :video="video"></Video>
    </div>
  </div>
</template>

<script>
import Video from "@/components/Video";
import API from "@/api";
import Header from "@/components/Header";

export default {
  name: "MainPage",
  components: {Header, Video},
  data() {
    return {videos: [], searchText: "", favorites: {}}
  },
  async mounted() {
    this.videos = await API.getVideosList()
    this.favorites = this.videos.filter(v => v.favorite === true)
    console.log(this.favorites)
  },
  methods: {
    changedSearch(value) {
      this.searchText = value
    }
  },
  computed: {
    filteredVideos() {
      return this.videos.filter(p => p.name.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  }

}
</script>

<style scoped>

#video-list {
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 20px;
}

</style>