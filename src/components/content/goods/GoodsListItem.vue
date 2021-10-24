<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p class="title">{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <i class="iconfont icon-shoucang"></i>
      <span class="collect"> {{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad');
    },
    itemClick() {
      const id = this.goodsItem.iid || this.goodsItem.item_id;
      this.$router.push('/detail/' + id);
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list-item {
  padding-bottom: 5px;
    // 1.
    width: 47%;
    // 2.
    // width:100%;   // 瀑布流
    // break-inside: avoid;  // 瀑布流（防止元素内部内容打乱）
    img {
      width: 100%;
      border-radius: 5px;
      box-shadow: 1px 1px 2px 1px rgba($color: #666, $alpha: 0.2);
    }
    .goods-info {
      text-align: center;
      font-size: 12px;
      line-height: 18px;
      .title {
        text-align: left;
        @include overflow-more(2);
      }
      .iconfont{
        vertical-align:bottom;
        line-height: 20px;
      }
      .price {
        margin-right: 20px;
        color: $color-high-text2;
      }

    }
  }
</style>
