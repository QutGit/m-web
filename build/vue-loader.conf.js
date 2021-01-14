'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

// 分别获取不同环境是否开启sourceMap配置参数
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction // 是否js跟css分离
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting, // 是否设置缓存破坏 对于进行srouceMap debug时有帮助
  /** 
   * 在模板编辑过程中，编译器可以将某些属性，如src路径，转换为require调用，以便目标资源可以由webpack处理
   * 默认配置会转换img标签上的src，svg的image标签上的xlink:href属性
   * ======================================
   * */ 
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
