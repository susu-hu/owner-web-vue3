<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 13:55:25
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-27 01:29:50
 * @FilePath: \electronic-deposit\src\components\DepositRquest.vue
 * @Description: 发起请求
-->

<template>
  <el-dialog
    :model-value="show"
    title="发起请求"
    width="420px"
    center
    :append-to-body="true"
    @close="closeDialog"
    class="page-dailog"
  >
    <el-form
      ref="formRef"
      :rules="rules"
      :model="form"
      :inline="true"
      label-width="140px"
    >
      <el-form-item label="请求ID：" prop="id">
        <el-input v-model="form.id" clearable />
      </el-form-item>
      <el-form-item label="存证摘要：" prop="hash">
        <el-input v-model="form.hash" clearable />
      </el-form-item>
      <el-form-item label="请求说明Hash：" prop="ext">
        <el-input v-model="form.ext" clearable />
      </el-form-item>
      <el-form-item label="批准人数：" prop="voted">
        <el-input v-model="form.voted" clearable />
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

<script setup name="DepositRquest">
import { ref, unref, reactive, onBeforeUnmount } from "vue";
import mitter from "@/utils/bus.js";
import { addGood } from "@/api";
import { ElMessage } from "element-plus";
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["update:show"]);
const closeDialog = () => {
  emits("update:show", false);
  resetForm();
};
//当前账户
const accounts = ref("");
mitter.$on("accounts", (e) => {
  accounts.value = e;
});
// 按钮防重复点击
const loading = ref(false);
// 表单
const formRef = ref(null);
// 定义变量
const form = reactive({
  voted: "",
  ext: "",
  id: "",
  hash: "",
});
// 表单规则
const rules = {
  voted: [{ required: true, message: "请输入批准人数", trigger: "blur" }],
  ext: [{ required: true, message: "请输入请求说明Hash", trigger: "blur" }],
  id: [{ required: true, message: "请输入请求ID", trigger: "blur" }],
  hash: [{ required: true, message: "请输入存证摘要", trigger: "blur" }],
};
// 表单提交
const submitForm = async () => {
  let formEl = unref(formRef);
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true;
      try {
        const { code } = await addGood(form);
        if (code == 200) {
          closeDialog();
          // 更新我的存证请求列表
          mitter.$emit("getRequestData", {
            page: 1,
            pageSize: 20,
            accounts: accounts.value,
          });
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
onBeforeUnmount(() => {
  mitter.$off("accounts");
});
</script>

<style lang="less">
.page-dailog {
  border-radius: 20px;
}
</style>
