import Mock from 'mockjs';
import { param2Obj } from '../src/utils';

/*
  第一个参数：文件夹目录
  第二个参数：是否查找子文件夹
  第三个参数：要匹配的文件格式

  返回值：返回一个require函数
  require函数包括三个属性：
  1.resolve 是一个函数，它返回请求被解析后得到的模块 id
  2.keys 也是一个函数，它返回一个数组，由所有可能被上下文模块处理的请求组成
  3.id 是上下文模块里面所包含的模块 id. 它可能在你使用 module.hot.accept 的时候被用到

*/
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

console.log(modules)

let mocks = [];
Object.keys(modules).forEach((key) => {
  mocks = [ ...mocks, ...modules[key] ];
})

export function mockXHR () {
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false
      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    // eslint-disable-next-line prefer-rest-params
    this.proxy_send(...arguments)
  }
  function XHR2ExpressReqWrap (respond) {
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%', respond)
    return function (options) {
      let result = null
      if (respond instanceof Function) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', options)
        const { body, type, url } = options;
        console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', param2Obj(url));
        result = respond({ method: type, body: JSON.parse(body), query: param2Obj(url) })
      } else {
        result = respond
      }
      console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', result)
      return Mock.mock(result)
    }
  }
  for (const i of mocks) {
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&', i)
    // eslint-disable-next-line new-cap
    Mock.mock(i.url, i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}
