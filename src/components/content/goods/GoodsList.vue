<template>
  <div class="goods">
    <slot></slot>
    <div class="goods-list">
      <goods-list-item
        v-for="(item, index) in goods"
        :key="index"
        :goods-item="item"
      />
    </div>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  // width: 100%;
  // margin: 0px auto; // 剧中
  // padding: 8px;
  // columns: 2; // 默认列数
  // column-gap: 8px; // 列间距
}
</style>
