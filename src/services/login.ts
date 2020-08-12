import request from '@/utils/request';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

export async function getLoginPlatformInfo() { //获取平台商信息
  let resp = request(`/api/dbpay-platform/platformMerchant/getLoginPlatformInfo`);
  resp = typeof resp === 'object' ? resp : JSON.parse(resp);
  return resp;
}
