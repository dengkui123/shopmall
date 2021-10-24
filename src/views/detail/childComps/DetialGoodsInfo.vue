<template>
  <!-- 商品详情 -->
  <div v-if="!!Object.keys(detailInfo).length" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div
      class="info-pic"
      v-for="(item, index) in detailInfo.detailImage"
      :key="index"
    >
      <div class="info-key">{{ item.key }}</div>
      <ul class="info-list">
        <li v-for="(citem, cindex) in item.list" :key="cindex">
          <img v-lazy="citem" alt="商品图片" @load="imgLoad" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    };
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    }
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit('imageLoad');
        // 图片加载完后返回事件给父组件（未使用better-scroll,处理未完）
      }
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.goods-info {
  .info-desc {
    .desc {
      color: #000;
      line-height: 20px;
      padding: 0 20px;
    }
  }

  .info-pic {
    .info-key {
      padding: 20px;
    }
    .info-list {
      li {
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
