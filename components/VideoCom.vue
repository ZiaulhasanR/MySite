<template>
  <div class="video-container">
    <video autoplay muted loop playsinline class="background-video">
      <source src="/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="content">
      <h1 class="text-white text-4xl font-bold">Hello!</h1>
      <p class="text-white">I am Ziaul Hassan.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Full screen */
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
  object-fit: cover; /* Ensures video covers the screen */
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
  top: 40%;
}
</style>
