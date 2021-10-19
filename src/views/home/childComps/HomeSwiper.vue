<template>
  <swiper :interval="4000" :animDuration="500">
    <div class="slide" v-for="(item, id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </div>
  </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper.vue'
export default {
  name: 'HomeSwiper',
  components: {
    Swiper
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
}
.slide img {
  width: 100%;
}
</style>
