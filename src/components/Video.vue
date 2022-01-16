<template>
  <div>
    <div class="video-container" @click="navigateToWatchPage">
      <img :alt="video.hoverImage" :src="hover?video.hoverImage:video.coverImage" class="video-image"
           @mouseleave="hover=false" @mouseover="hover=true"/>
      <div class="video-description-container">
        <div class="video-owner-image">
          <img :src="video.ownerImage" class="owner-image"/>
        </div>
        <div class="video-description">
          <span class="video-title">{{ video.title }}</span>
          <span class="video-owner-name">{{ video.ownerName }}</span>
          <div class="video-view-date-container">
            <span class="video-view-count">{{ video.viewCount }} views  • </span>
            <span class="video-date">Published {{ video.publishDateInMonth }} months ago</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      hover: false
    }
  },
  methods: {
    navigateToWatchPage() {
      this.$router.push(`/watch/${this.video.id}`)
    }
  },
  props: {
    video: Object,
  },
};
</script>

<style scoped>
.video-container {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 360px;
  height: 360px;
}

.video-image {
  width: 360px;
  height: 200px;
}

.video-description-container {
  display: flex;
  flex-direction: row;
}

.video-owner-image {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 36px;
  height: 36px;
  margin-top: 15px;
}

.owner-image {
  border-radius: 50%;
}

.video-description {
  display: flex;
  flex-direction: column;
  margin: 8px;
}

.video-view-date-container {
  display: flex;
  flex-direction: row;
  font-size: small;
}

.video-title {
  font-size: large;
  margin: 4px;
}

.video-owner-name {
  margin: 4px;
}

.video-view-count {
  margin: 4px;
}

.video-date {
  margin: 4px;
}
</style>
