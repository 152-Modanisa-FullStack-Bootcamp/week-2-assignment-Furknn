<template>
  <div>
    <div class="video-container">
      <img :src="video.coverImage" class="video-image">
      <span>{{ video.name }}</span>
      <span>{{ video.ownerName }}</span>
      <span>{{ video.description }}</span>
      <span>{{ video.favorite }}</span>

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
  flex-direction: column;
  width: 220px;
  margin-right: 40px;
  margin-bottom: 40px;
}

.video-image {
  width: 100%;
  height: 100%;
}

</style>