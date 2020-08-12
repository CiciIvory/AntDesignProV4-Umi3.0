import request from '@/utils/request';
import { stringify } from 'qs';

export async function queryTags () {
  return request('/api/tags');
}
export async function queryTodayTradeSummary (platformId) { //今日交易统计
  let url = `/api/dbpay-platform/dashboard/queryTodayTradeSummary?platformId=${platformId}`
  return request(url,
    {
      method: 'GET',
    }
  );

}
export async function queryLatestTradeSummary (platformId) { //最近交易统计
  let url = `/api/dbpay-platform/dashboard/queryLatestTradeSummary?platformId=${platformId}`
  return request(url,
    {
      method: 'GET',
    }
  );
}
export async function getLoginPlatformInfo() { //获取平台商信息
  let resp = request(`/api/dbpay-platform/platformMerchant/getLoginPlatformInfo`, { method: 'GET' });
  resp = typeof resp === 'object' ? resp : JSON.parse(resp);
  return resp;
}