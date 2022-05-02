module.exports = {
  outputDir: './build',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://124.71.223.181:7222',
        pathRewrite: {
          '^/api': '',
        },
        secure: false,
        changeOrigin: true,
      },
      '/myApi': {
        // target: 'http://119.91.195.233:3001',
        target: 'http://localhost:8101',
        pathRewrite: {
          '^/myApi': '',
        },
        secure: false,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        assets: '@/assets',
      },
    },
  },
};
