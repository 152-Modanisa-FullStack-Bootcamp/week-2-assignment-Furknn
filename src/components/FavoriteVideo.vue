<template>
  <div>
    <div class="video-container" @click="navigateToWatchPage">
      <div class="video-image-container">
        <img :alt="video.hoverImage" :src="hover?video.hoverImage:video.coverImage" class="video-image"
             @mouseleave="hover=false" @mouseover="hover=true">
      </div>
      <div class="description-container">
        <span class="video-title">{{ video.title }}</span>
        <div class="video-view-date-container">
          <span class="video-view-count"> {{ video.viewCount }} views •</span>
          <span class="video-date">Published {{ video.publishDateInMonth }} months ago</span>
        </div>
        <div class="video-owner-image-owner-container">
          <img :src="video.ownerImage" class="video-owner-image">
          <span class="video-owner-name">{{ video.ownerName }}</span>
        </div>
        <span class="video-description">{{ video.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: {
    video: Object
  },
  data() {
    return {
      hover: false
    }
  },
  methods: {
    navigateToWatchPage() {
      this.$router.push(`/watch/${this.video.id}`)
    }
  }
}
</script>

<style scoped>
.video-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 10px;
}

.description-container {
  display: flex;
  margin-left: 8px;
  flex-direction: column;
}

.video-title {
  font-size: large;
}

.video-image {
  width: 360px;
  height: 200px;
}

.video-view-date-container {
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  font-size: small;
}

.video-owner-image-owner-container {
  display: flex;
  font-size: small;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
}

.video-view-count {
  margin-right: 8px;
}

.video-owner-image {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.video-owner-name {
  margin-left: 8px;
}

.video-description {
  margin-top: 10px;
}
</style>