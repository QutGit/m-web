// https://cn.eslint.org/docs/rules/

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential', 
    'standard'
  ],
  // 只针对 *.vue 文件
  plugins: [ 'vue' ],
  rules: {
    // 允许使用 async-await
    'generator-star-spacing': 'off',
    // 只有在开发环境下允许debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "brace-style": [2, "1tbs", { "allowSingleLine": true }], // if while function 后面的{必须与if在同一行，java风格。 
    "no-dupe-keys": "error", // 禁止对象字面量中出现重复的 key
    "no-unreachable": "error", // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    "default-case": "error", // 要求 switch 语句中有 default 分支
    "no-empty-function": "error", // 禁止出现空函数
    "no-empty-pattern": "error", // 禁止使用空解构模式
    "no-floating-decimal": "error", // 禁止数字字面量中使用前导和末尾小数点
    "no-implicit-coercion": "error", // 禁止使用短符号进行类型转换
    "no-lone-blocks": "error", // 禁用不必要的嵌套块
    "no-multi-spaces": ["error", { ignoreEOLComments: true }], // 禁止出现多个空格
    "no-multi-str": "error", // 禁止多行字符串
    "no-new": "error", // 禁止使用new关键字时，没有变量接收
    "no-proto": "error", // 禁用__proto__
    "no-redeclare": "error", // 禁止声明同一个变量
    "no-self-assign": "error", // 禁止自身赋值
    // 禁止变量声明覆盖外层作用域的变量
    "no-shadow": ["off", { "builtinGlobals": true, "hoist": "functions", "allow": [] }],
    "no-unused-vars": "error", // 禁止未使用过的变量
    "no-use-before-define": ["error", { "functions": false }], // 禁止定义前使用
    "semi": "off", // 要求或禁止使用分号
    "array-bracket-spacing": ["error", "always", { "singleValue": false }], // 禁止或强制在括号内使用空格
    "indent": ["error", 2], // 强制使用一致的缩进 2空格
    "new-cap": ["error", { "newIsCap": true }], // 要求构造函数首字母大写
    "arrow-spacing": "off", // 要求箭头函数的箭头之前或之后有空格
    "constructor-super": "error", // 验证构造函数中 super() 的调用
    "no-const-assign": "error", // 不允许改变用const声明的变量
    "no-dupe-class-members": "error", // 不允许类成员中有重复的名称
    "no-duplicate-imports": "error", // 禁止重复导入
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "prefer-arrow-callback": "error", // 要求使用箭头函数作为回调
    "prefer-rest-params": "error", // 建议使用剩余参数代替 arguments
    "prefer-template": "error", // 建议使用模板字面量而非字符串连接
    "func-call-spacing": "off", // 函数之间的空格
    "space-before-function-paren": "off"
  }
}
