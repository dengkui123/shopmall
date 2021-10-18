<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="icon" :style="activeStyle"><slot name="item-icon"></slot></div>
    <div class="text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabbarTabbaritem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red',
    },
  },
  data() {
    return {}
  },
  computed: {
    isActive() {
      return this.$route.fullPath.includes(this.path)
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : ''
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path).catch(() => {})
    },
  },
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  height: 49px;
}
.icon {
  height: 29px;
  line-height: 29px;
}
.text {
  height: 16px;
  line-height: 16px;
}
.iconfont {
  font-size: 20px;
}
</style>
