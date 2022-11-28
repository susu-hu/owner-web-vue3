<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-28 21:02:03
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-28 22:42:32
 * @FilePath: \commercial-bill\src\components\action\BillAdd.vue
 * @Description: 发布票据
-->
<template>
  <el-dialog
    :model-value="show"
    title="发布票据"
    width="850px"
    center
    :append-to-body="true"
    @close="closeDialog"
    class="page-dailog"
    size="large"
  >
    <el-form
      ref="formRef"
      :rules="rules"
      :model="form"
      :inline="true"
      label-width="150px"
    >
      <el-form-item label="号码：" prop="infoID">
        <el-input v-model="form.infoID" clearable style="width: 200px" />
      </el-form-item>
      <el-form-item label="金额：" prop="infoAmt">
        <el-input v-model="form.infoAmt" clearable style="width: 200px" />
      </el-form-item>
      <el-form-item label="类型：" prop="infoType">
        <el-input v-model="form.infoType" clearable style="width: 200px" />
      </el-form-item>
      <el-form-item label="出票人：" prop="drwrAcct">
        <el-input v-model="form.drwrAcct" clearable style="width: 200px" />
      </el-form-item>
      <el-form-item label="出票人ID：" prop="drwrCmID">
        <el-input v-model="form.drwrCmID" clearable style="width: 200px" />
      </el-form-item>
      <el-form-item label="承兑人：" prop="accptrAcct">
        <el-input v-model="form.accptrAcct" clearable style="width: 200px" />
      </el-form-item>
      <el-form-item label="承兑人ID：" prop="accptrCmID">
        <el-input v-model="form.accptrCmID" clearable style="width: 200px" />
      </el-form-item>
      <el-form-item label="收款人：" prop="pyeeAcct">
        <el-input v-model="form.pyeeAcct" clearable style="width: 200px" />
      </el-form-item>
      <el-form-item label="收款人ID：" prop="pyeeCmID">
        <el-input v-model="form.pyeeCmID" clearable style="width: 200px" />
      </el-form-item>
      <el-form-item label="当前持票人：" prop="holdrAcct">
        <el-input v-model="form.holdrAcct" clearable style="width: 200px" />
      </el-form-item>
      <el-form-item label="当前持票人ID：" prop="holdrCmID">
        <el-input v-model="form.holdrCmID" clearable style="width: 200px" />
      </el-form-item>
      <el-form-item label="日期 ：" prop="infoIsseDate">
        <el-date-picker
          v-model="form.infoIsseDate"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
          type="date"
          clearable
        />
      </el-form-item>
      <el-form-item label="到期日期：" prop="infoDueDate">
        <el-date-picker
          v-model="form.infoDueDate"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
          type="date"
          clearable
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <BaseButton type="default" data="取消" @click="closeDialog" />
        <BaseButton data="确定" @click="submitForm" :loading="loading" />
      </span>
    </template>
  </el-dialog>
</template>

<script setup name="BillEndorse">
import { ref, reactive, unref } from "vue";
import mitter from "@/utils/bus.js";
import { formRuleValidate } from "./form";
import { addGood } from "@/api";
import { ElMessage } from "element-plus";
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  curr: {
    type: Object,
    default: () => {},
  },
});
// 按钮防重复点击
const loading = ref(false);
// 表单
const formRef = ref(null);
// 定义变量
const form = reactive({
  infoID: "",
  infoAmt: "",
  infoType: "",
  infoIsseDate: "",
  infoDueDate: "",
  drwrAcct: "",
  drwrCmID: "",
  accptrAcct: "",
  accptrCmID: "",
  pyeeAcct: "",
  pyeeCmID: "",
  holdrAcct: "",
  holdrCmID: "",
});
// 表单规则
const rules = formRuleValidate();
const emits = defineEmits(["update:show", "refresh"]);
const closeDialog = () => {
  emits("update:show", false);
  resetForm();
};
// 表单提交
const submitForm = () => {
  let formEl = unref(formRef);
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true;
      try {
        const { code } = await addGood(form);
        if (code == 200) {
          closeDialog();
          emits("refresh");
          ElMessage.success("操作成功");
        }
      } catch (err) {
      } finally {
        loading.value = false;
      }
    }
  });
};
// 表单重置
const resetForm = () => {
  let formEl = unref(formRef);
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="less">
.page-dailog {
  border-radius: 20px;
}
</style>
