<template>
  <div>
    <div class="cart-list">
      <cart-list-item  :product="item" v-for="(item, index) in cartList" :key="index"></cart-list-item>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartListItem from './CartListItem.vue';
export default {
  name: 'CartList',
  components: {
    CartListItem
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['cartList'])
  }
};
</script>

<style lang="scss" scoped>
.cart-list {
  width: 100%;
}
</style>
