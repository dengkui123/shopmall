<template>
  <div class="detail-bottom-bar">
    <div class="left-bar">
      <div class="service item">
        <p><i class="iconfont icon-kefu"></i></p>
        <p>客服</p>
      </div>
      <div class="shop item">
        <p ><i class="iconfont icon-dianpu"></i></p>
        <p>店铺</p>
      </div>
      <div class="collect item">
        <p><i class="iconfont icon-shoucang"></i></p>
        <p>收藏</p>
      </div>
    </div>
    <div class="right-bar">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  props: {},
  data() {
    return {};
  },
  methods: {
    addCart() {
      this.$emit('addCart');
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-bottom-bar {
  box-shadow: 0 1px 2px 3px rgba($color: #ccc, $alpha: 0.3);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background-color: #fff;
  display: flex;
  text-align: center;
  .left-bar {
    flex: 3;
    display:flex;
    align-items:center;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      line-height: 18px;
    }
    .service {
      color: #f69;
    }

  }.right-bar{
    flex:4;
    display: flex;
    text-align: center;
    line-height: 49px;
    .cart{
      flex: 5;
      background-color: #ffe817;
      color: #333;
    }
    .buy{
      flex:4;
      background-color: #f69;
      color: #fff;
    }
  }
}
</style>
