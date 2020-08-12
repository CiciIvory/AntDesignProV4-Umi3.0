import request from '@/utils/request';

export async function getWithdrawDepositOP (params) {//结算管理列表
  return request(
    `/api/dbpay-platform/fund/querySettleBatch `,
    {
      method: 'POST',
      credentials: 'omit',
      body: params,
    }
  )
}

export async function exportSettleFile (batchNo) {//下载结算文件
  const token = localStorage.getItem('react-token')
  var oReq = new XMLHttpRequest();
  oReq.open("POST", `/api/dbpay-platform/settle/exportSettleFileByBatch?batchNo=${batchNo}`, true);
  oReq.responseType = "blob";
  oReq.setRequestHeader("Content-Type", "application/json");
  oReq.setRequestHeader("Authorization", `Bearer ${token}`);
  oReq.onload = function (oEvent) {
    var content = oReq.response;
    var elink = document.createElement('a');
    elink.download = batchNo + '.xls';//xls   因为后台输入是csv'格式，用xls显示的不理想
    elink.style.display = 'none';
    var blob = new Blob([content]);
    //var blob = new Blob([content], { type: 'application/vnd.ms-excel'});//text/csv,charset=GBK
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    document.body.removeChild(elink);
  };
  oReq.send(JSON.stringify(batchNo));
}

export async function getQueryWithdrawDetailOP (params) {//查询结算列表
  // return request(`/api/dbpay-settlement/settle/querySettleJnl`,
  return request(`/api/dbpay-platform/fund/querywithdraw`,
    {
      method: 'POST',
      credentials: 'omit',
      body: params,
    }
  );
}

export async function auditRequest (params) { //批量提现审核
  return request(`/api/dbpay-platform/fund/batchAudit   `,
    {
      method: 'POST',
      credentials: 'omit',
      body: params,
    }
  );
}

export async function getsettleStatement (payOrderNo) {//查询提现详情
  return request(`/api/dbpay-platform/fund/querywithdrawdetail/${payOrderNo}`)
}