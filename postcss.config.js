module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 视窗的宽度，对应设计稿宽度
      viewportHeight: 667, // 视窗的高度，对应设计稿高度（可以不配置）
      unitPrecision: 5, // 指定‘px’转换为视窗单位值得小数位数
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      // selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], // 指定不需要转化的类
      mixPixelValue: 1, // 小于或等于1px不转换为视窗单位
      MediaQuery: false // 允许在媒体查询中转换px
    }
  }
}
