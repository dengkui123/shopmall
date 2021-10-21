<template>
  <div class="back-top">
    <i class="iconfont icon-arrowTop-fill"></i>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data() {
    return {

    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.back-top{
    position: fixed;
    bottom: 80px;
    right: 30px;
    color: $color-theme;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #eee;
    line-height: 40px;
    text-align: center;
    .iconfont{
      font-size: 24px;
    }
  }
</style>
