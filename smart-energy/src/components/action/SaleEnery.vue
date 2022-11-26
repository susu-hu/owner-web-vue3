<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 13:55:25
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 22:37:18
 * @FilePath: \smart-energy\src\components\SaleEnery.vue
 * @Description: 出售能源
-->

<template>
  <el-dialog
    :model-value="show"
    title="出售能源"
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
      <el-form-item label="能源ID：" prop="energyId">
        <el-input v-model="form.energyId" clearable />
      </el-form-item>
      <el-form-item label="单价：" prop="price">
        <el-input v-model="form.price" clearable />
      </el-form-item>
      <el-form-item label="总量：" prop="energyAmount">
        <el-input v-model="form.energyAmount" clearable />
      </el-form-item>
      <el-form-item label="余量：" prop="energyAllowance">
        <el-input v-model="form.energyAllowance" clearable />
      </el-form-item>
      <el-form-item label="是否完成：" prop="success">
        <el-radio-group v-model="form.success">
          <el-radio label="1" size="large" border>是</el-radio>
          <el-radio label="0" size="large" border>否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="购买人数量：" prop="numBuyers">
        <el-input v-model="form.numBuyers" clearable />
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

<script setup name="SaleEnery">
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
  energyAllowance: "",
  energyAmount: "",
  energyId: "",
  numBuyers: "",
  price: "",
  success: "",
});
// 表单规则
const rules = {
  energyAllowance: [{ required: true, message: "请输入余量", trigger: "blur" }],
  energyAmount: [{ required: true, message: "请输入总量", trigger: "blur" }],
  energyId: [{ required: true, message: "请输入能源ID", trigger: "blur" }],
  numBuyers: [{ required: true, message: "请输入购买人数量", trigger: "blur" }],
  price: [{ required: true, message: "请输入单价", trigger: "blur" }],
  success: [{ required: true, message: "请选择是否完成", trigger: "change" }],
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
          // 更新我的出售列表
          mitter.$emit("getSalesdData", {
            page: 1,
            pageSize: 20,
            accounts: accounts.value,
          });
          ElMessage.success("出售成功");
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
