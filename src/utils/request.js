/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification, message } from 'antd';
import { getDvaApp } from 'umi'


/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
});

// 请求拦截
request.interceptors.request.use(async (url, options) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
  if (['post', 'put', 'delete'].indexOf(options.method) > -1) {
    if (!(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json; charset=utf-8'
      options.body = JSON.stringify(options.body)
    }
  }
  const token = localStorage.getItem('react-token')
  headers.Authorization = `Bearer ${token}`
  return {
    url,
    options: { ...options, headers }
  }
})

// 返回拦截
request.interceptors.response.use(async res => {
  const response = await res.clone();
  const codeMaps = {
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    // 401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  };

  if (response.status === 401) {
    notification.error({
      message: response.message || '未登录或登录已过期，请重新登录。',
      duration: 3000,
    })
    localStorage.clear()
    setTimeout(() => {
      // 跳转登录
      getDvaApp()._store.dispatch({
        type: 'login/logout',
        payload: getDvaApp()._store.getState().global.keycloak,
      })
    }, 3000);
    return false
  }

  if (codeMaps[response.status]) {
    notification.error({
      message: `请求错误 ${response.status}`,
      description: codeMaps[response.status]
    })
    return false
  }
  return response;
});


export default request;
