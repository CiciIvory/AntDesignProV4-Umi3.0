import request from '@/utils/request';
import { stringify } from 'qs'

export async function getPlatformRecFileUrl (recDate) { //获取账单下载地址
  return request(`/api/dbpay-platform/rec/getPlatformRecFileUrl?recDate=${recDate}`);
}

export async function getMonthPlatformRecFileUrl(recDate) { //获取月账单下载地址
  let tmp = request(`/api/dbpay-platform/rec/getPlatformRecFileUrlByMonth?recDate=${recDate}`, {
    method: 'GET',
  });
  return tmp;
}

export async function getServerByExpont (url, data) {
  return await request(`${url}?${stringify(data)}`);
}

export async function getDoubtType (recResult) { //获取差错类型
  return request(`/api/dbpay-platform/doubt/getDoubtType?recResult=${recResult}`)
}

export async function getDoubthandle (params) { //差错处理
  return request(`/api/dbpay-platform/doubt/doubthandle`,
    {
      method: 'POST',
      credentials: 'omit',
      body: params,
    }
  );
}

export async function getError (searchValues = {}) { // 差错管理列表
  return request(`/api/dbpay-platform/doubt/queryDoubtDetail?${stringify(searchValues)}`);
}
