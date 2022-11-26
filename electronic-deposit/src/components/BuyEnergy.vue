<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 15:43:47
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 21:14:18
 * @FilePath: \electronic-deposit\src\components\BuyEnergy.vue
 * @Description: 购买能源
-->
<template>
  <el-dialog
    :model-value="show"
    title="购买能源"
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
      <el-form-item label="能源ID：" prop="energyId">
        <el-input v-model="form.energyId" clearable disabled />
      </el-form-item>
      <el-form-item label="购买单价：" prop="price">
        <el-input v-model="form.price" clearable />
      </el-form-item>
      <el-form-item label="购买数额：" prop="energyAmount">
        <el-input v-model="form.energyAmount" clearable />
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

<script setup name="BuyEnergy">
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
  energyId: "",
  price: "",
  energyAmount: "",
});
// 表单规则
const rules = {
  energyId: [{ required: true, message: "请输入能源ID", trigger: "blur" }],
  price: [{ required: true, message: "请输入单价", trigger: "blur" }],
  energyAmount: [
    { required: true, message: "请输入购买数额", trigger: "blur" },
  ],
};
watch(
  () => props.curr,
  (n, _) => {
    form.energyId = n.energyId;
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
          ElMessage.success("购买成功");
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
