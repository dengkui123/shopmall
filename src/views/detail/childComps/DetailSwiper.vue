<template>
<!-- 轮播图 -->
  <swiper class="detail-swiper" :interval="8000" :animDuration="300">
    <!-- slide类名 或者 li元素需要固定-->
    <li class="slide" v-for="(item, index) in images" :key="index">
      <img :src="item" alt="" />
    </li>
  </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper.vue';

export default {
  name: 'DetailSwiper',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Swiper
  }
};
</script>

<style lang="scss" scoped>
.detail-swiper {
    height: 300px;
    overflow: hidden;
.slide {
  width: 100%;
  flex-shrink: 0;
  img {
    width: 100%;
    transform: translateY(-25%);
    }
  }
}

</style>
