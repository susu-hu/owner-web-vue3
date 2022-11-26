<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-24 20:25:29
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 17:13:03
 * @FilePath: \trace\src\components\AddRecord.vue
 * @Description: 添加商品流通记录
-->
<template>
  <el-dialog
    :model-value="show"
    title="添加记录"
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
      <el-form-item label="操作账户地址：" prop="addr">
        <el-input v-model="form.addr" clearable />
      </el-form-item>
      <el-form-item label="商品状态：" prop="status">
        <el-input v-model="form.status" clearable />
      </el-form-item>
      <el-form-item label="说明：" prop="remark">
        <el-input
          v-model="form.remark"
          type="textarea"
          show-word-limit
          clearable
          :maxlength="200"
          resize="none"
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

<script setup name="AddGood">
import { ref, unref, reactive, watch } from "vue";
import { addGood } from "@/api";
import { ElMessage } from "element-plus";
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  curr: {
    type: Object,
    default: () => {}, //当前对象数据
  },
});
watch(
  () => props.curr,
  (n, _) => {
    console.log("当前对象", n);
  }
);
const emits = defineEmits(["update:show", "query"]);
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
  addr: "",
  status: "",
  remark: "",
});
// 表单规则
const rules = {
  addr: [{ required: true, message: "请输入操作账户地址", trigger: "blur" }],
  status: [{ required: true, message: "请输入商品状态", trigger: "blur" }],
};
// 表单提交
const submitForm = async () => {
  let formEl = unref(formRef);
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true;
      try {
        const { code } = await addGood({ ...form, ...props.curr });
        if (code == 200) {
          closeDialog();
          emits("query");
          ElMessage.success("添加成功");
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
