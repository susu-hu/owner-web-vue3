/*
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 17:19:43
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-28 20:01:11
 * @FilePath: \commercial-bill\src\api\constant\column.js
 * @Description: 我的票据
 */
export const MY_BILL_COLUMNS = [
    {
        prop: "infoID",
        label: "号码",
        showtip: true
    },
    {
        prop: "infoAmt",
        label: "金额",
        showtip: true
    },
    {
        prop: "infoType",
        label: "类型",
        showtip: true
    },
    {
        prop: "infoIsseDate",
        label: "日期",
        showtip: true
    },
    {
        prop: "infoDueDate",
        label: "到期日期",
        showtip: true
    },
    {
        prop: "drwrAcct",
        label: "出票人",
        showtip: true
    },
    {
        prop: "drwrCmID",
        label: "出票人ID",
        width: 90,
        showtip: true

    },

    {
        prop: "accptrAcct",
        label: "承兑人",
        showtip: true
    },
    {
        prop: "accptrCmID",
        label: "承兑人ID",
        width: 90,
        showtip: true
    },
    {
        prop: "pyeeAcct",
        label: "收款人",
        showtip: true
    },
    {
        prop: "pyeeCmID",
        label: "收款人ID",
        width: 90,
        showtip: true
    },

    {
        prop: "holdrAcct",
        label: "当前持票人",
        width: 100,
        showtip: true
    },
    {
        prop: "holdrCmID",
        label: "当前持票人ID",
        width: 120,
        showtip: true
    },

    {
        prop: "waitEndorseAcc",
        label: "待背书人",
        width: 90,
        showtip: true
    },
    {
        prop: "waitEndorseCmID",
        label: "待背书人ID",
        width: 120,
        showtip: true
    },
    {
        prop: "rejectEndorseAcct",
        label: "拒绝背书人",
        width: 120,
        showtip: true
    },
    {
        prop: "rejectEndorseCmID",
        label: "拒绝背书人ID",
        width: 120,
        showtip: true
    },
    {
        prop: "status",
        label: "票据状态",
        showtip: true
    },
    {
        slot: "action",
        label: "操作",
        fixed: "right",
        width: 240
    },
]
