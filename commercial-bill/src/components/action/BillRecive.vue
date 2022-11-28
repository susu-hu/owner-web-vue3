<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-28 20:56:35
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-28 21:00:35
 * @FilePath: \commercial-bill\src\components\action\BillRecive.vue
 * @Description: 签收
-->
<template>
  <el-dialog
    :model-value="show"
    title="签收"
    width="460px"
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
      label-width="170px"
    >
      <el-form-item label="号码：" prop="infoID">
        <el-input v-model="form.infoID" clearable disabled />
      </el-form-item>
      <el-form-item label="当前持票人：" prop="holdrAcct">
        <el-input v-model="form.holdrAcct" clearable />
      </el-form-item>
      <el-form-item label="当前持票人证件号码：" prop="holdrCmID">
        <el-input v-model="form.holdrCmID" clearable />
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
import { ref, reactive, unref, watch } from "vue";
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
  holdrAcct: "",
  holdrCmID: "",
});
// 表单规则
const rules = {
  infoID: [{ required: true, message: "请输入号码", trigger: "blur" }],
  holdrAcct: [{ required: true, message: "请输入当前持票人", trigger: "blur" }],
  holdrCmID: [
    { required: true, message: "请输入当前持票人ID", trigger: "blur" },
  ],
};
watch(
  () => props.curr,
  (n, _) => {
    form.infoID = n.infoID;
  }
);
const emits = defineEmits(["update:show", "query"]);
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
          emits("query");
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
