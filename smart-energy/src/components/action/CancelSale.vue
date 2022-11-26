<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 20:03:12
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 20:23:09
 * @FilePath: \smart-energy\src\components\CanceleSale.vue
 * @Description: 取消出售
-->
<template>
  <el-dialog
    :model-value="show"
    title="取消出售"
    width="420px"
    center
    :append-to-body="true"
    @close="closeDialog"
    class="page-dailog"
  >
    <p>是否取消出售？</p>
    <template #footer>
      <span class="dialog-footer">
        <BaseButton type="default" data="取消" @click="closeDialog" />
        <BaseButton data="确定" @click="submitForm" :loading="loading" />
      </span>
    </template>
  </el-dialog>
</template>
<script setup name="CancelSale">
import { ref, unref, reactive } from "vue";
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
const emits = defineEmits(["update:show", "query"]);
const closeDialog = () => {
  emits("update:show", false);
};
// 按钮防重复点击
const loading = ref(false);
// 表单提交
const submitForm = async () => {
  loading.value = true;
  try {
    const { code } = await addGood({ energyId: props.curr.energyId });
    if (code == 200) {
      closeDialog();
      emits("query");
      ElMessage.success("取消成功");
    }
  } catch (err) {
  } finally {
    loading.value = false;
  }
};
</script>
<style lang="less">
.page-dailog {
  border-radius: 20px;
  p {
    text-align: center;
  }
}
</style>
