/*
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 17:19:43
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 23:08:24
 * @FilePath: \electronic-deposit\src\api\constant\column.js
 * @Description: 所有待批准的存证请求列表/我的存证请求列表/我的存证-对应的列表字段
 */
export const DEPOSIT_BEAPPROVAL_COLUMNS = [
    {
        prop: "id",
        label: "请求ID",
        showtip: true
    },
    {
        prop: "hash",
        label: "存证摘要", showtip: true
    },
    {
        prop: "ext",
        label: "请求说明Hash", showtip: true
    },
    {
        prop: "voted",
        label: "批准人数", showtip: true
    },
    {
        prop: "creator",
        label: "请求人地址", showtip: true
    },
    {
        slot: "action",
        label: "操作", showtip: true
    },
]
export const DEPOSIT_REQUEST_COLUMNS = [
    {
        prop: "id",
        label: "请求ID",
        showtip: true
    },
    {
        prop: "hash",
        label: "存证摘要", showtip: true
    },
    {
        prop: "ext",
        label: "请求说明Hash", showtip: true
    },
    {
        prop: "voted",
        label: "批准人数", showtip: true
    },
    {
        slot: "action",
        label: "操作", showtip: true
    },
]
export const DEPOSIT_COLUMNS = [
    {
        prop: "id",
        label: "存证ID",
        showtip: true
    },
    {
        prop: "hash",
        label: "存证摘要", showtip: true
    },
    {
        prop: "voted",
        label: "批准人数", showtip: true
    },
    {
        prop: "timestamp",
        label: "时间", showtip: true
    },

]