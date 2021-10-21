<template>
<!-- 商品数据 -->
  <div v-if="!!Object.keys(goods).length" class="goods-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="new-price">{{ goods.newPrice }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>

    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoods',
  props: {
    goods: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-info {
  padding: 10px;
  .info-title {
    font-weight: 600;
    line-height: 20px;
    color: #000;
    @include overflow-more(3);
  }
  .info-price {
    margin: 10px 0;
    .new-price {
      color: $color-high-text2;
      font-size: 20px;
      margin-right: 5px;
    }
    .old-price {
      text-decoration: line-through;
      margin-right: 10px;
    }
    .discount {
      font-size: 12px;
      vertical-align: top;
      padding: 4px;
      color: #fff;
      background-color: $color-high-text2;
      border-radius: 10px;
    }
  }
  .info-other {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 20px;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    img {
      height: 16px;
      vertical-align: middle;
      margin-right: 2px;
    }
  }
}
</style>
