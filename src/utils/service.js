import axios from './axios';
import conf from '../support/config';

// 参数组装
export default function service (url, method = 'GET', params) {
  if (!url) return;
  let aParams = { method, url: `${url}` };
  if (conf.mock && url.startsWith('/mock')) {
    aParams = { method, url };
  }
  if (params) {
    method === 'GET' ? aParams.params = params : aParams.data = params
  }
  return axios(aParams)
}
