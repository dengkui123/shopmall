<template>
  <div class="home-container">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>i 购物</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends"/>
    <home-feature />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommend from './childComps/HomeRecommend.vue'
import HomeFeature from './childComps/HomeFeature.vue'
import { getHomeMultidata } from 'api/home.js'

export default {
  name: 'ShopmallHome',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    async getHomeMultidata() {
      const { data: res } = await getHomeMultidata();
      this.banners = res.banner.list;
      this.recommends = res.recommend.list;
      console.log(res);
    }
  },
  created() {
    this.getHomeMultidata()
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.home-container {
  padding-top: 44px;
  .home-nav {
    background-color: $color-theme;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
}

</style>
