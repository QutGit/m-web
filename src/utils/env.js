let types = ['wbg_app'];
let agent = navigator.userAgent;

const matches = ()=>{
  let u = navigator.userAgent;
  return { // 移动终端浏览器版本信息
    trident: u.indexOf('Trident') > -1, // IE内核
    presto: u.indexOf('Presto') > -1, // opera内核
    webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
    mobile: Boolean(u.match(/AppleWebKit.*Mobile.*/)), // 是否为移动终端
    ios: Boolean(u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)), // ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
    iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, // 是否iPad
    webApp: u.indexOf('Safari') === -1 // 是否web应该程序，没有头部与底部
  };
}

const Env = {
  // 本地邮件客户端打开 已经跟客户端约定固定 agent头
  // eslint-disable-next-line no-shadow
  nested: types.filter((name) => agent.indexOf(name) !== -1).length > 0,
  is: (type) => {
    // eslint-disable-next-line default-case
    switch (type.toLowerCase()) {
    case 'app':
      return Boolean(matches().mobile);
    case 'browser':
      return !matches().mobile;
    }
  }
}

export default Env;
