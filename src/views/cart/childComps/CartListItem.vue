<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <p @click="checkClick"><i class="iconfont icon-duigouxiao" :class="{ 'selector-active': this.product.isChecked}"></i></p>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title ellipsis">{{product.title}}</div>
      <div class="item-desc ellipsis">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{product.price}}</div>
        <div class="item-count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartListItem',
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
  components: {
  },
  // 方法集合
  methods: {
    checkClick() {
      this.product.isChecked = !this.product.isChecked;
    }
  },
  created() {
  }
}
</script>
<style lang="scss" scoped>
.cart-list-item {
    width: 100%;
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #ccc;
    align-items: center;

  }
  .item-selector {
    width: 20px;

  }
  .ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-title {
    font-size: 14px;
    color: #000;
  }
  .item-desc {
    padding-bottom: 10px;
    font-size: 12px;
  }
  .item-img {
    padding: 5px;
  }
  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-info {
    height: 100px;
    padding: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .info-bottom .item-price {
    color: orangered;
  }

.selector-active {
  color: $color-theme;
  border-color: $color-theme;
}
</style>
