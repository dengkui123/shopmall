<template>
<div class="cart">
  <!-- 导航 -->
  <nav-bar class="nav-bar">
    <template v-slot:center>
      <div>购物车({{ cartLength }})</div>
    </template>
  </nav-bar>
  <!-- 商品列表 -->
  <cart-list></cart-list>
  <!-- 底部汇总 -->
   <cart-bottom-bar></cart-bottom-bar>
</div>

</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import CartList from './childComps/CartList.vue';
import CartBottomBar from './childComps/CartBottomBar.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'ShopmallCart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['cartLength'])
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="scss" scoped>
.nav-bar {
  background-color: $color-theme;
  color: #fff;
}
</style>
