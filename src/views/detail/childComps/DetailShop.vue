<template>
<!-- 店铺信息 -->
  <div v-if="!!Object.keys(shop).length" class="shop-info">
    <div class="shop-top">
      <div class="img"><img :src="shop.logo" alt="店铺logo" /></div>
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="sell-num">
          <p class="name">{{ shop.sells | sells }}</p>
          <p class="num">总销量</p>
        </div>
        <div class="goods-num">
          <p class="name">{{ shop.goodsCount }}</p>
          <p class="num">全部宝贝</p>
        </div>
      </div>
      <div class="shop-middle-right">
        <div class="list" v-for="(item, index) in shop.score" :key="index">
          <span class="name">{{ item.name }}</span>
          <span class="score" :class="{ red: item.isBetter }">{{
            item.score
          }}</span>
          <span class="isBetter" :class="{ 'bg-red': item.isBetter }">{{
            item.isBetter | comment
          }}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="shop-btn">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShop',
  props: {
    shop: {
      type: Object,
      default: () => {}
    }
  },
  filters: {
    // 总销量
    sells(value) {
      if (value > 10000) {
        return (value / 10000).toFixed(1) + '万';
      } else {
        return value;
      }
    },
    // 评价高低
    comment(value) {
      return value ? '高' : '低';
    }
  }
};
</script>

<style lang="scss" scoped>
.shop-info {
  border-top: 5px solid #eee;
  padding: 30px;
  .shop-top {
    display: flex;
    align-items: center;
    .img {
      padding: 5px;
      margin-right: 5px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #eee;
      img {
        width: 100%;
      }
    }
  }
  .shop-middle {
    margin-top: 20px;
    color: #000;
    display: flex;
    justify-content: space-around;
    text-align: center;
    .shop-middle-left {
      flex: 1;
      display: flex;
      text-align: center;
      justify-content: space-around;
      border-right: 1px solid #eee;
      .sell-num {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .name {
          font-size: 18px;
        }
      }
      .goods-num {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .name {
          font-size: 18px;
        }
      }
    }
    .shop-middle-right {
      flex: 1;
      font-size: 12px;
      .list {
        padding: 5px 10px 5px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .score {
          color: #0b0;
        }
        .isBetter {
          padding: 1px;
          color: #eee;
          background-color: #0b0;
        }
        .red {
          color: #f11;
        }
        .bg-red {
          background-color: #f11;
        }
      }
    }
  }
  .shop-bottom {
    margin: 20px auto;
    width: 120px;
    height: 24px;
    line-height: 24px;
    border-radius: 5px;
    text-align: center;
    background-color: #eee;
    transition: all 0.2s;
    &:active {
      opacity: 0.8;
    }
  }
}
</style>
