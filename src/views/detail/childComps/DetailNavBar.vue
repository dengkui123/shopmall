<template>
<!-- 头部导航栏 -->
  <nav-bar class="nav-bar">
    <template v-slot:left>
      <div @click="backToLastPage"><i class="iconfont icon-zuo"></i></div>
    </template>
    <template v-slot:center>
      <ul class="title">
        <li
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: currentIndex === index }"
          @click="currentIndex = index"
        >
          {{ item }}
        </li>
      </ul>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    };
  },
  methods: {
    backToLastPage() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: #fff;
  .title {
    @include flex-box;
    .title-item {
      @include flex-1(100%);
    }
    .active {
      color: $color-theme;
    }
  }
  .icon-zuo {
    font-weight: 600;
    transition: all 0.2s;
    &:active {
      color: $color-theme;
    }
  }
}
</style>
