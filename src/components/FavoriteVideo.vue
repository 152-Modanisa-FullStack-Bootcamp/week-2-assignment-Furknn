<template>
  <div>
    <div class="video-container">
      <img :src="video.coverImage" class="video-image" height="200px">
      <div class="description-container">
        <span>{{ video.name }}</span>
        <span>{{ video.ownerName }}</span>
        <span>{{ video.description }}</span>
        <span>{{ video.favorite }}</span></div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: {
    video: Object
  }
}
</script>

<style scoped>
.video-container {
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 20px;
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 10px;
}

.description-container {

  display: flex;
  flex-direction: column;
}

.video-image {
  margin-right: 10px;
}

</style>