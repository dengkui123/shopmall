<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="skyBlue">
      <template v-slot:item-icon>
        <i class="iconfont icon-home"></i>
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="skyBlue">
      <template v-slot:item-icon>
        <i class="iconfont icon-fenlei"></i>
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="skyBlue">
      <template v-slot:item-icon>
        <i class="iconfont icon-shouye"></i>
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="skyBlue">
      <template v-slot:item-icon>
        <i class="iconfont icon-user"></i>
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/tabbar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  name: 'TabbarMaintabbar',
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped></style>
