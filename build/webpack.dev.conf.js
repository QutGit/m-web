'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // 此选项控制是否生成，以及如何生成 source map
  devtool: config.dev.devtool,

  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    // 添加响应头信息
    headers: {
      'origin': '*'
    },
    // dev-server 只有在请求时才编译包(bundle)。这意味着 webpack 不会监视任何文件改动。称之为惰性模式
    lazy: false, 
    // https: true,
    hot: true, // 模块热替换 必须有 webpack.HotModuleReplacementPlugin 才能完全启用 HMR
    contentBase: false, 
    progress: true, // 将运行进度输出到控制台
    compress: true, // 是否启用gzip压缩
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层, 默认禁用
    overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
    publicPath: config.dev.assetsPublicPath,
    // 请求代理
    proxy: config.dev.proxyTable,
    // 不显示webpack错误信息到控制台
    quiet: true, 
    // 是否使用文件系统轮询对文件操作
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    // 创建一个在编译时可以配置的全局常量
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), 
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // 拷贝static中的文件到生成的dist文件中
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

// console.log('******************************************')
// console.log(JSON.stringify(devWebpackConfig.module.rules))
// console.log('******************************************')

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
