import request from './request';
/**
 * 获取所有账户信息
 * @param {*} params 
 * @returns 
 */
export const getAccounts = (params) => {
    return request({
        url: "/getAccount",
        method: "get",
        params,
    });
};
/**
 * 获取当前账户信息
 * @param {*} params 
 * @returns 
 */
export const getAcccountInfo = (params) => {
    return request({
        url: "/getDataInfoE",
        method: "get",
        params,
    });
};


/**
 * 获取所有待批准的资产请求列表
 * @param {*} data
 * @returns
 */
export const getEnergyList = (data) => {
    return request({
        url: "/getEnergyListE",
        method: "post",
        data,
    });
};

/**
 * 我的资产请求列表
 * @param {*} data
 * @returns
 */
export const getSalesList = (data) => {
    return request({
        url: "/getSalesListE",
        method: "post",
        data,
    });
};
/**
 * 我的资产
 * @param {*} data
 * @returns
 */
export const getPurchasedList = (data) => {
    return request({
        url: "/getPurchasedListE",
        method: "post",
        data,
    });
};
/**
 * 测试操作
 * @param {*} data 
 * @returns 
 */
export const addGood = (data) => {
    return request({
        url: "/addGood",
        method: "post",
        data,
    });
};

