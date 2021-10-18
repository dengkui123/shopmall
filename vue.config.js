module.exports = {
  configureWebpack: {
    resolve: {
      // 配置别名
      alias: {
        api: "@/api",
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        views: "@/views",
      },
    },
  },
  css: {
    loaderOptions: {
      // 全局配置sass变量
      sass: {
        additionalData: `@import "@/assets/css/global.scss";`,
      },
    },
  },
};
