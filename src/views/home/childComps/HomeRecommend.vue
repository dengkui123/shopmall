<template>
  <div class="home-recommend">
    <div v-for="item in recommends" :key="item.sort" class="recommend-item">
      <img class="img" :src="item.image" alt="recommend">
      <div class="title">{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.home-recommend {
  display:flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px 0;
  border-bottom: 10px solid #eee;
  .recommend-item {
    flex: 1;
    .img {
      width: 80%;
      margin-bottom: 10px;
    }
  }
}
</style>
