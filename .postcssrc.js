module.exports = { 
  "plugins": { 
    /* 通过import跟url插件使原生css支持import导入 */
    "postcss-import": {}, 
    "postcss-url": {}, 
    // "postcss-aspect-ratio-mini": {}, // 设置长宽比插件
    "postcss-write-svg": { utf8: false }, 
    "postcss-cssnext": {}, // 兼容css4新特性
    "postcss-px-to-viewport": { 
      viewportWidth: 750, // 视窗宽度，对应设计稿的宽度 一般为750
      viewportHeight: 1334, // 视窗高度，对于750屏幕高度为1334，也可以不配置
      unitPrecision: 3, // 指定px转换为视窗单位值保留的小数位数
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines', '.text-'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // 允许在媒体查询中转换`px`
    }, 
    // "postcss-viewport-units":{}, // 调用viewport-units-buggyfill组件 兼容老版机型
    "cssnano": { // 用来压缩和清理css代码
      preset: "advanced",  
      autoprefixer: false, // 禁用 autoprefixer
      "postcss-zindex": false 
    } 
  } 
};


