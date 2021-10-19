module.exports = {
  configureWebpack: {
    resolve: {
      // 配置别名
      alias: {
        api: '@/api',
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        views: '@/views'
      }
    }
  },
  css: {
    loaderOptions: {
      // 全局配置sass变量
      sass: {
        prependData: '@import "@/assets/css/global.scss";'
      }
    }
  }
}
