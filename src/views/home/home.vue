<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>i 购物</div>
      </template>
    </nav-bar>
          <!-- tab分类栏 -->
      <tab-control
        v-show="isFixed"
        ref="tab-control1"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
    <scroll-view
      ref="scroll"
      :dataList="showgoodsList"
      pullUpLoad
      pulldown
      :probeType="3"
      :listenScroll="true"
      @scroll="contentScroll"
      @scrollToEnd="loadMore"
      @pulldown="loadMore"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @swiperImageLoad.once="swiperImageLoad"/>
      <!-- 推荐栏 -->
      <home-recommend :recommends="recommends" />
      <!-- 分类图 -->
      <home-feature />
      <!-- tab分类栏 -->
      <tab-control
        ref="tab-control2"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <!-- 商品列表 -->
      <goods-list :goods="showgoodsList" />
    </scroll-view>
    <back-top
      v-show="isShow"
      class="back-top"
      @click.native="backToTop"
    ></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper.vue';
import HomeRecommend from './childComps/HomeRecommend.vue';
import HomeFeature from './childComps/HomeFeature.vue';

import NavBar from 'components/common/navbar/NavBar.vue';
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';
import ScrollView from 'components/common/scroll/ScrollView.vue';
import BackTop from 'components/content/backTop/BackTop.vue';

import { getHomeMultidata, getHomeGoods } from 'api/home.js';
import { debounce } from 'common/utils.js'

export default {
  name: 'ShopmallHome',
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    NavBar,
    TabControl,
    GoodsList,
    ScrollView,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop', // 当前商品类型
      isShow: false, // 是否显示返回顶部箭头
      isTabFixed: false, // tab是否吸顶
      tabOffsetTop: 0, // tab距离顶部距离
      isFixed: false,
      position: 0
    };
  },
  watch: {},
  computed: {
    showgoodsList() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /*
    事件监听方法
    */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.scroll.scrollTo(0, -this.tabOffsetTop, 1);
      this.$refs['tab-control1'].currentIndex = index;
      this.$refs['tab-control2'].currentIndex = index;
    },

    /* 回到顶部 */
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },

    /* 监听首页滚动 */
    contentScroll(pos) {
      this.isShow = pos.y < -624;
      this.isFixed = (-pos.y) > this.tabOffsetTop;
      this.position = pos;
    },

    /* 上拉到底部加载数据 */
    loadMore() {
      this.getHomeGoods(this.currentType);
    },

    swiperImageLoad() {
      // 获取tab-control的offsetTop值
      this.tabOffsetTop = this.$refs['tab-control2'].$el.offsetTop;
    },
    /*
    网络请求方法
    */

    async getHomeMultidata() {
      const { data: res } = await getHomeMultidata();
      this.banners = res.banner.list;
      this.recommends = res.recommend.list;
    },
    async getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      const res = await getHomeGoods({ type: type, page: page });
      this.goods[type].list = [...this.goods[type].list, ...res.data.list];
      this.goods[type].page++;
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    // 监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 300);
    this.$bus.$on('itemImageLoad', () => {
      refresh()
      // this.$refs.scroll.refresh()
    })
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.position, 1);
    this.$refs.scroll.refresh();
  },
  deactivated() {
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  // padding-top: 44px;

  .home-nav {
    background-color: $color-theme;
    color: #fff;
  }

  .tab-control {
    z-index: 1;
    position: relative;
  }
}
</style>
