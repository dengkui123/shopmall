<template>
  <div class="detail" >
    <!-- navbar -->
    <detail-nav-bar
      ref="el0"
      @getElem="getElem"
      :active-nav-bar="activeNavBar"
    ></detail-nav-bar>
    <div class="content" @touchstart="touchstart">
      <!-- 轮播图 -->
      <detail-swiper :images="topImages"></detail-swiper>
      <!-- 商品信息 -->
      <detail-goods :goods="goods"></detail-goods>

      <!-- 店铺信息 -->
      <detail-shop :shop="shop"></detail-shop>
      <!-- 商品详情 -->
      <detail-info :detail-info="detailInfo"></detail-info>
      <!-- 商品参数 -->
      <detail-params ref="el1" :param-info="paramInfo"></detail-params>
      <!-- 评论 -->
      <detail-comment-info
        ref="el2"
        :comment-info="commentInfo"
      ></detail-comment-info>
      <!-- 推荐商品列表 -->
      <goods-list ref="el3" :goods="recommendGoods">
        <div class="recommend-title">推荐商品</div>
      </goods-list>
      <!-- 弹窗 -->
      <!-- <toast :message="message" :is-show="show"></toast> -->
    </div>

    <back-top
      v-show="isShow"
      class="back-top"
      @click.native="backToTop"
    ></back-top>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import {
  getDetailMsg,
  getRecommend,
  Goods,
  Shop,
  GoodsParams
} from 'api/detail.js';

import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailGoods from './childComps/DetailGoods.vue';
import DetailShop from './childComps/DetailShop.vue';
import DetailInfo from './childComps/DetialGoodsInfo.vue';
import DetailParams from './childComps/DetailParams.vue';
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import GoodsList from 'components/content/goods/GoodsList.vue'; // 商品推荐列表
import BackTop from 'components/content/backTop/BackTop.vue';
// import Toast from 'components/common/toast/Toast.vue'
export default {
  name: 'Detail',
  props: {},
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoods,
    DetailShop,
    DetailInfo,
    DetailParams,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    BackTop
    // Toast
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
      detailInfo: {},
      // 商品尺码信息
      paramInfo: {},
      // 评论
      commentInfo: {},
      // 推荐商品列表
      recommendGoods: [],
      // 是否显示返回顶部图标
      isShow: false,
      refsList: ['el0', 'el1', 'el2', 'el3'],
      activeNavBar: 0,
      // 弹窗内容
      message: '',
      // 弹窗是否显示
      show: false
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
    // 点击导航栏跳转到对应位置
    getElem(val) {
      document.documentElement.scrollTop = document.body.scrollTop =
        this.$refs[val].$el.offsetTop - 44;
    },
    // 返回顶部方法
    backToTop() {
      let timer = null;
      timer = setInterval(() => {
        document.documentElement.scrollTop -=
          document.documentElement.scrollTop / 10;
        if (document.documentElement.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 4);
    },
    // 显示、隐藏返回顶部图标
    showTitle() {
      window.addEventListener('scroll', () => {
        this.isShow = document.documentElement.scrollTop > 1200;
      });
    },
    // 滚动到位置和导航栏对应
    touchstart(e) {
      this.refsList.forEach((item, index, el) => {
        if (
          e.touches[0].pageY > this.$refs[el[index]].$el.offsetTop &&
          (index === el.length - 1 ||
            e.touches[0].pageY < this.$refs[el[index + 1]].$el.offsetTop) && this.activeNavBar !== index
        ) {
          this.activeNavBar = index;
        }
      });
    },
    // 添加到购物车
    async addToCart() {
      // 1. 获取商品需要的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.id;

      // 2. 将商品添加到购物车里
      // this.$store.commit('addCart', product);
      const res = await this.$store.dispatch('addCart', product);
      this.$toast.show(res, 2000);
    },
    // 获取详情页所有信息
    async getDetailMsg() {
      const { result: res } = await getDetailMsg({ iid: this.id });
      // 轮播图
      this.topImages = res.itemInfo.topImages;
      // 商品信息
      this.goods = new Goods(res.itemInfo, res.columns, res.shopInfo.services);
      // 店铺信息
      this.shop = new Shop(res.shopInfo);
      // 商品详情
      this.detailInfo = res.detailInfo;
      // 获取参数信息
      this.paramInfo = new GoodsParams(
        res.itemParams.info,
        res.itemParams.rule
      );
      // 获取评论信息
      this.commentInfo = res.rate.cRate ? res.rate.list[0] : {};
    },
    async getRecommend() {
      const { data: res } = await getRecommend();
      this.recommendGoods = res.list;
    }
  },
  created() {
    this.getDetailMsg();
    this.getRecommend();
    this.$nextTick(() => {
      this.showTitle();
    });
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
.detail {
  position: relative;
  background-color: #fff;
  padding: 44px 0 49px 0;
  z-index: 10;
  .recommend-title {
    font-size: 16px;
    padding: 10px;
    color: #000;
  }
}
</style>
