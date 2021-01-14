'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://192.168.6.2:7001',
        // pathRewrite: {'^/api' : ''},
        secure: false,
        changeOrigin: true
      }
    },
    host: '0.0.0.0', // 指定使用一个host，默认是localhost，如果希望服务器外部可访问，指定0.0.0.0
    port: 8080, // 端口
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // 是否启用esLint
    useEslint: true,
    // 是否在浏览器中显示eslint的错误或者警告信息
    showEslintErrorsInOverlay: false,

    // https://webpack.docschina.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true
  },

  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    // 生产环境是否使用sourceMap
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
