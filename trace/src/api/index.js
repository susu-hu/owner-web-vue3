import request from './request';
/**
 * 获取商品流通记录
 * @param {*} data
 * @returns
 */
export const getGoodRecords = (data) => {
    return request({
        url: "/getRecords",
        method: "post",
        data,
    });
};
/**
 * 创建商品
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

