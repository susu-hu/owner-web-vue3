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
 * 我的票据
 * @param {*} data
 * @returns
 */
export const getBillList = (data) => {
    return request({
        url: "/getBillList",
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

