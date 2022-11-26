/*
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 17:19:43
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-27 00:35:33
 * @FilePath: \smart-energy\src\api\constant\column.js
 * @Description: 能源列表/出售记录列表/购买记录列表 -对应的列表字段
 */
export const ENERY_COLUMNS = [
    {
        prop: "energyId",
        label: "能源ID",
        showtip: true
    },
    {
        prop: "initiator",
        label: "出售人", showtip: true
    },
    {
        prop: "price",
        label: "单价", showtip: true
    },
    {
        prop: "energyAmount",
        label: "总量", showtip: true
    },
    {
        prop: "energyAllowance",
        label: "余量", showtip: true
    },
    {
        prop: "success",
        label: "是否完成", showtip: true
    },
    {
        prop: "numBuyers",
        label: "购买人数量", showtip: true
    },
    {
        slot: "action",
        label: "操作",
    },
]
export const SALES_COLUMNS = [
    {
        prop: "energyId",
        label: "能源ID",
        showtip: true
    },
    {
        prop: "price",
        label: "单价", showtip: true
    },
    {
        prop: "energyAmount",
        label: "总量", showtip: true
    },
    {
        prop: "energyAllowance",
        label: "余量", showtip: true
    },
    {
        prop: "success",
        label: "是否完成", showtip: true
    },
    {
        prop: "numBuyers",
        label: "购买人数量", showtip: true
    },
    {
        slot: "action",
        label: "操作",
    },
]
export const PURCHASED_COLUMNS = [
    {
        prop: "energyId",
        label: "能源ID",
        showtip: true
    },
    {
        prop: "price",
        label: "购买单价", showtip: true
    },
    {
        prop: "energyAmount",
        label: "购买数额", showtip: true
    },
    {
        prop: "purchaseTime",
        label: "购买时间", showtip: true
    },

]