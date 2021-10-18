<template>
  <div id="app">
    <router-view />
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar,
  },
}
</script>

<style lang="scss">
@import './assets/css/base.css';
#app {
  color: color-tint;
}
</style>
