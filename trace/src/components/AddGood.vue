<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 15:43:47
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 12:22:41
 * @FilePath: \trace\src\components\AddGood.vue
 * @Description: 创建商品
-->
<template>
  <el-dialog
    :model-value="show"
    title="新增商品"
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
      <el-form-item label="商品类别:" prop="_category">
        <el-input v-model.trim="form._category" clearable />
      </el-form-item>
      <el-form-item label="商品ID:" prop="_goodsId">
        <el-input v-model.trim="form._goodsId" clearable />
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

<script setup name="AddGood">
import { ref, reactive, unref } from "vue";
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
// 按钮防重复点击
const loading = ref(false);
// 表单
const formRef = ref(null);
// 定义变量
const form = reactive({
  _category: "",
  _goodsId: "",
});
// 表单规则
const rules = {
  _category: [{ required: true, message: "请输入商品分类", trigger: "blur" }],
  _goodsId: [{ required: true, message: "请输入商品ID", trigger: "blur" }],
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
          ElMessage.success("新增成功");
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
