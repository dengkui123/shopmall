<template>
  <div id="app">
    <keep-alive exclude="Detail,ShopmallCart">
      <router-view />
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue';

export default {
  name: 'App',
  components: {
    MainTabBar
  }
};
</script>

<style lang="scss">
@import "./assets/css/base.css";

// #app {
//   padding-bottom: 49px;
// }
</style>
