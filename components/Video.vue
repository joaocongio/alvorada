<template>
  <section class="video">
    <video autoplay muted loop>
      <source src="@/assets/video/alvorada2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>
</template>

<style lang="scss" scoped>
.video {
  video {
    width: 100%;
    height: 100%;
  }
}
</style>
