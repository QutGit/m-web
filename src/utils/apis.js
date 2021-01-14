import service from './service';

// 首页 产品与服务
export const getProducts = () => service ('/mock/wck/website/products', 'POST');

// 测试 GET
export const getGithub = () => service ('/users?since=135', 'GET');

// 测试 GET
export const getUsers = () => service ('/api/users', 'GET');

// 首页 玲珑动态 列表
export const getDynamics = (params)=>service ('/mock/wck/website/medias', 'POST', params);

// 首页 玲珑动态 详情
export const getDynamicsDetails = (params)=>service ('/mock/wck/website/medias_details', 'POST', params);
