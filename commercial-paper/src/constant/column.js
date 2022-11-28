/*
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 17:19:43
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-27 00:41:57
 * @FilePath: \commercial-paper\src\api\constant\column.js
 * @Description: 所有待批准的资产请求列表/我的资产请求列表/我的资产-对应的列表字段
 */
// 所有待批准的资产请求列表
export const DEPOSIT_BEAPPROVAL_COLUMNS = [
    {
        prop: "id",
        label: "请求ID",
        showtip: true
    },
    {
        prop: "assetHash",
        label: "资产摘要", showtip: true
    },
    {
        prop: "assetType",
        label: "资产类型", showtip: true
    },
    {
        prop: "assetName",
        label: "资产名称", showtip: true
    },
    {
        prop: "ext",
        label: "请求说明", showtip: true
    },
    {
        prop: "endorserNum",
        label: "背书人数", showtip: true
    },
    {
        prop: "lastTransferdBy",
        label: "请求人地址", showtip: true
    },
    {
        slot: "action",
        label: "操作",
    },
]
export const DEPOSIT_REQUEST_COLUMNS = [
    {
        prop: "id",
        label: "请求ID",
        showtip: true
    },
    {
        prop: "assetHash",
        label: "资产摘要", showtip: true
    },
    {
        prop: "assetType",
        label: "资产类型", showtip: true
    },
    {
        prop: "assetName",
        label: "资产名称", showtip: true
    },
    {
        prop: "ext",
        label: "请求说明", showtip: true
    },
    {
        prop: "endorserNum",
        label: "背书人数", showtip: true
    },
    {
        slot: "action",
        label: "操作",
    },
]
export const DEPOSIT_COLUMNS = [

    {
        prop: "id",
        label: "资产ID ", showtip: true
    },
    {
        prop: "assetHash",
        label: "资产摘要", showtip: true
    },
    {
        prop: "assetType",
        label: "资产类型", showtip: true
    },
    {
        prop: "assetName",
        label: "资产名称", showtip: true
    },
    {
        prop: "lastTransferdBy",
        label: "资产拥有者", showtip: true
    },
    {
        prop: "creator",
        label: "资产创建者", showtip: true
    },
    {
        prop: "endorserNum",
        label: "背书人数", showtip: true
    },
    {
        prop: "createTimestamp",
        label: "时间", showtip: true
    },
    {
        prop: "destory",
        label: "销毁", showtip: true
    },
    {
        prop: "destorier",
        label: "销毁人", showtip: true
    },
    {
        prop: "transferNum",
        label: "转移地址", showtip: true
    },
    {
        slot: "action",
        label: "操作",
        width: 180,
        fixed: 'right'
    },

]