export const formRuleValidate = (obj) => {
    const rule = {
        infoID: [{ required: true, message: "请输入号码", trigger: "blur" }],
        infoAmt: [{ required: true, message: "请输入金额", trigger: "blur" },
        {
            required: true,
            trigger: ["change", "blur"],
            validator: (rule, value, callback) =>
                validateSelfHandler(
                    "仅支持数字输入",
                    /^\d+(\.\d+)?$/,
                    value,
                    callback
                ),
        },],
        infoType: [{ required: true, message: "请输入类型", trigger: "blur" }],
        infoIsseDate: [{ required: true, message: "请选择日期", trigger: "change" }],
        infoDueDate: [
            { required: true, message: "请选择到期日期", trigger: "change" },
        ],
        drwrAcct: [{ required: true, message: "请输入出票人", trigger: "blur" }],
        drwrCmID: [{ required: true, message: "请输入出票人ID", trigger: "blur" }],
        accptrAcct: [{ required: true, message: "请输入承兑人", trigger: "blur" }],
        accptrCmID: [{ required: true, message: "请输入承兑人ID", trigger: "blur" }],
        pyeeAcct: [{ required: true, message: "请输入收款人", trigger: "blur" }],
        pyeeCmID: [{ required: true, message: "请输入收款人ID", trigger: "blur" }],
        holdrAcct: [{ required: true, message: "请输入当前持票人", trigger: "blur" }],
        holdrCmID: [
            { required: true, message: "请输入当前持票人ID", trigger: "blur" },
        ],
    }
    return rule;
}
const validateSelfHandler = (msg, rule, value, callback) => {
    if (value != null && value !== undefined && value != '') {
        if (new RegExp(rule).test("" + value)) {
            callback();
        } else {
            callback(new Error(msg));
        }
    } else {
        callback();
    }
};