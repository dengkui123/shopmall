<template>
  <div class="cart-bottom-bar">
    <div class="bar-left">
      <p class="allcheck">
        <i
          @click="allcheck"
          class="iconfont icon-duigouxiao"
          :class="{ 'active-color': allChecked }"
        ></i
        >全选
      </p>
      <p class="price">合计：￥{{ totalPrice }}</p>
    </div>
    <div class="bar-right">去结算({{ checkedLength }})</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'CartBottomBar',
  components: {},
  computed: {
    ...mapGetters(['cartList']),

    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.isChecked;
        })
        .reduce((prevalue, item) => {
          return prevalue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    checkedLength() {
      return this.cartList.filter((item) => item.isChecked).length;
    },
    allChecked() {
      return this.cartList.findIndex((item) => !item.isChecked) === -1;
    }
  },
  methods: {
    allcheck() {
      if (this.allChecked) {
        this.cartList.forEach((item) => {
          item.isChecked = false;
        });
      } else {
        this.cartList.forEach((item) => {
          item.isChecked = true;
        })
      }
    }

  },
  created() {}
};
</script>

<style lang="scss" scoped>
.cart-bottom-bar {
  width: 100%;
  position: absolute;
  bottom: 49px;
  line-height: 40px;
  display: flex;
  background-color: #fff;
  align-items: center;
  .bar-left {
    padding-left: 10px;
    flex: 2;
    background-color: #eee;
    align-items: center;
    display: flex;
    .allcheck {
      flex: 1;
      .iconfont {
        margin-right: 5px;
      }
    }
    .price {
      flex: 2;
    }
  }
  .bar-right {
    text-align: center;
    color: #fff;
    flex: 1;
    background-color: #f69;
  }
  .active-color {
    border-color: $color-theme;
    color: $color-theme;
  }
}
</style>
