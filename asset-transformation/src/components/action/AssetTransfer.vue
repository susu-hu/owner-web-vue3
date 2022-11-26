<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-27 01:01:52
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-27 01:07:58
 * @FilePath: \asset-transformation\src\components\action\AssetTransfer.vue
 * @Description: 我的资产-资产转移
-->
<template>
  <el-dialog
    :model-value="show"
    title="资产转移"
    width="400px"
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
      label-width="110px"
    >
      <el-form-item label="资产拥有者：" prop="lastTransferdBy">
        <el-input v-model="form.lastTransferdBy" clearable disabled />
      </el-form-item>
      <el-form-item label="转移地址：" prop="addr">
        <el-input v-model="form.addr" clearable />
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

<script setup name="MakeApprove">
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
  id: "",
  lastTransferdBy: "",
  addr: "",
});
// 表单规则
const rules = {
  addr: [{ required: true, message: "请选择转移地址", trigger: "blur" }],
};
watch(
  () => props.curr,
  (n, _) => {
    form.id = n.id;
    form.lastTransferdBy = n.lastTransferdBy;
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
