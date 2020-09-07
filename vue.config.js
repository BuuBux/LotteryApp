module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/_main.scss";',
      },
    },
  },
  pluginOptions: {
    apollo: {
      lintGQL: true,
    },
  },
};
