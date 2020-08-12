import request from '@/utils/request';
import { stringify } from 'qs'

// 支付交易列表
export async function getQueryPaymentOrderByCondition (params) {
  return request(`/api/dbpay-platform/trade/batchquery?${stringify(params)}`);
}

//获取交易明细
export async function getOrderAllDetail (payOrderNo) {
  return request(`/api/dbpay-platform/trade/order/detail?payOrderNo=${payOrderNo}`);
}