/*
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 17:19:43
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 22:59:54
 * @FilePath: \electronic-deposit\src\api\constant\column.js
 * @Description: 所有待批准的存证请求列表/我的存证请求列表/我的存证-对应的列表字段
 */
export const DEPOSIT_BEAPPROVAL_COLUMNS = [
    {
        prop: "energyId",
        label: "请求ID",
        showtip: true
    },
    {
        prop: "initiator",
        label: "存证摘要", showtip: true
    },
    {
        prop: "price",
        label: "请求说明Hash", showtip: true
    },
    {
        prop: "批准人数",
        label: "总量", showtip: true
    },
    {
        prop: "energyAllowance",
        label: "请求人地址", showtip: true
    },
    {
        slot: "action",
        label: "操作", showtip: true
    },
]
export const DEPOSIT_REQUEST_COLUMNS = [
    {
        prop: "energyId",
        label: "请求ID",
        showtip: true
    },
    {
        prop: "price",
        label: "存证摘要", showtip: true
    },
    {
        prop: "energyAmount",
        label: "请求说明Hash", showtip: true
    },
    {
        prop: "energyAllowance",
        label: "批准人数", showtip: true
    },
    {
        slot: "action",
        label: "操作", showtip: true
    },
]
export const DEPOSIT_COLUMNS = [
    {
        prop: "energyId",
        label: "存证ID",
        showtip: true
    },
    {
        prop: "price",
        label: "存证摘要", showtip: true
    },
    {
        prop: "energyAmount",
        label: "批准人数", showtip: true
    },
    {
        prop: "purchaseTime",
        label: "时间", showtip: true
    },

]