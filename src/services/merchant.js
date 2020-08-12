import request from '@/utils/request';
import { stringify } from 'qs'



// 通过平台id获取商户列表
export async function getListByPlatformId (options) {
  return request(`/api/dbpay-platform/merchant/getListByPlatformId?${stringify(options)}`);
}

// 修改商户状态
export async function updateStatus (payload) {
  const options = {
    method: 'POST',
    body: payload,
  };
  return request(`/api/dbpay-platform/merchant/openOrClose`, options);
}

// 更新协商详情
export async function addOrUpdateProtocolInfo (payload) {
  const options = {
    method: 'POST',
    body: payload,
  };
  return request(`/api/dbpay-platform/merchant/addOrUpdateProtocolInfo`, options);
}

//通过id获取协议详情
export async function getProtocolInfo (options) {
  return request(`/api/dbpay-platform/merchant/getProtocolInfo?${stringify(options)}`);
}

//协议管理列表
export async function getAgreeMangeList (options) {
  return request(`/api/dbpay-platform/consumer/agreement/list?${stringify(options)}`);
}
//用户签约协议同步
export async function changeAgreeStatus (options) {
  return request(`/api/dbpay-platform/consumer/agreement/sync?${stringify(options)}`);
}

// 通过id获取商户详情
export async function getDetailById (options) {
  return await request(`/api/dbpay-platform/merchant/getMerchantCompleteInfo?${stringify(options)}`);
}

// 审核基本信息
export async function updateCheckStatus (payload) {
  const options = {
    method: 'POST',
    body: payload,
  };
  return request(`/api/dbpay-platform/merchant/updateCheckStatus`, options);
}

// 获取银行卡信息
export async function getMerchantBankInfo (options) {
  return await request(`/api/dbpay-platform/merchant/getMerchantBankInfo?${stringify(options)}`);
}

//获取所有的已开未开通产品
export async function getAllById (options) {
  return await request(`/api/dbpay-platform/merchantProduct/getAllById?${stringify(options)}`);
}

// 配置商品支付产品
export async function configureMerchantPaymentProduct (payload) {
  const options = {
    method: 'POST',
    body: payload,
  };
  return request(`/api/dbpay-platform/merchantProduct/configureMerchantPaymentProduct`, options);
}

// 开户
export async function createAcount (payload) {
  const options = {
    method: 'POST',
    body: payload,
  };
  return request(`/api/dbpay-platform/merchant/insertIndividual`, options);
}

// 上传
export async function getToken ({ fileName }) {
  return request(`/api/dbpay-platform/up/token?fileName=${fileName}`);
}

// 银行列表
export async function getBankNameList () {
  return request(`/api/dbpay-platform/cityInfo/getBankNameList`);
}

// 省份列表
export async function getProvinceList () {
  return request(`/api/dbpay-platform/cityInfo/getProvinceInfoList`);
}

// 城市列表
export async function getCityInfoList (options) {
  return request(`/api/dbpay-platform/cityInfo/getCityInfoList?${stringify(options)}`);
}

// 支行列表
export async function getQueryCnapsBankCode (options) {
  return request(`/api/dbpay-platform/cityInfo/queryCnapsBankCode?${stringify(options)}`);
}

// 企业开户
export async function createEnterprise (params) {
  return request(`/api/dbpay-platform/merchant/insertEnterprise`, {
    method: 'POST',
    body: params
  });

}


//通过id获取结算协议详情
export async function getProtocolSettleInfo (options) {
  return request(`/api/dbpay-platform/merchant/getProtocolSettleInfo?${stringify(options)}`);
}
// 结算协议
export async function addOrUpdateSettlementProtocolInfo (payload) {
  const options = {
    method: 'POST',
    body: payload,
  };
  return request(`/api/dbpay-platform/merchant/addOrUpdateSettlementProtocolInfo`, options);
}
//通过rid删除结算协议
export async function deleteProtocolSettleInfo (id) {
  return request(`/api/dbpay-platform/merchant/deleteSettlementProtocolInfo?rid=${id}`,{
    method:'DELETE'
  });
}