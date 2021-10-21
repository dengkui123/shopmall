<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    tabClick(index) {
      // this.currentIndex = index;
      this.$emit('tabClick', index);
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  margin-bottom: 5px;
  &-item {
    flex: 1;
    border: 3px solid transparent;
  }

  .active {
    color: $color-high-text;
    span {
      border-bottom: 3px solid $color-theme;
      padding: 5px;
    }
  }
}
</style>
