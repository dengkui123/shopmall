<template>
  <div class="detail">
    <!-- navbar -->
    <detail-nav-bar></detail-nav-bar>
    <!-- 轮播图 -->
    <detail-swiper :images="topImages"></detail-swiper>
    <!-- 商品信息 -->
    <detail-goods :goods="goods"></detail-goods>
    <!-- 店铺信息 -->
    <detail-shop :shop="shop"></detail-shop>
    <!-- // 商品详情 -->
    <detail-info :detail-info="detailInfo"></detail-info>
  </div>
</template>

<script>
import { getDetailMsg, Goods, Shop } from 'api/detail.js';

import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailGoods from './childComps/DetailGoods.vue';
import DetailShop from './childComps/DetailShop.vue';
import DetailInfo from './childComps/DetialGoodsInfo.vue'
export default {
  name: 'Detail',
  props: {},
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoods,
    DetailShop,
    DetailInfo
  },
  data() {
    return {
      id: '',
      // 轮播图
      topImages: [],
      // 商品数据
      goods: {},
      // 店铺数据
      shop: {},
      // 商品详情
      detailInfo: {}
    };
  },
  watch: {
    $route: {
      handler() {
        this.id = this.$route.params.id;
      },
      immediate: true
    }
  },
  computed: {},
  methods: {
    // 获取详情页所有信息
    async getDetailMsg() {
      const { result: res } = await getDetailMsg({ iid: this.id });
      console.log(res);
      // 轮播图
      this.topImages = res.itemInfo.topImages;
      // 商品信息
      this.goods = new Goods(res.itemInfo, res.columns, res.shopInfo.services);
      // 店铺信息
      this.shop = new Shop(res.shopInfo);
      // 商品详情
      this.detailInfo = res.detailInfo;
      console.log(this.detailInfo);
    }
  },
  created() {
    this.getDetailMsg();
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.detail {
  position: relative;
  background-color: #fff;
  padding-top: 44px;
  z-index: 10;

}
</style>
