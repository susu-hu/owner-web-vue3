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
        url: "/getDataInfo",
        method: "get",
        params,
    });
};


/**
 * 获取能源列表
 * @param {*} data
 * @returns
 */
export const getEnergyList = (data) => {
    return request({
        url: "/getEnergyList",
        method: "post",
        data,
    });
};

/**
 * 获取已售列表
 * @param {*} data
 * @returns
 */
export const getSalesList = (data) => {
    return request({
        url: "/getSalesList",
        method: "post",
        data,
    });
};
/**
 * 获取购买列表
 * @param {*} data
 * @returns
 */
export const getPurchasedList = (data) => {
    return request({
        url: "/getPurchasedList",
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

