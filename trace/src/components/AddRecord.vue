<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-24 20:25:29
 * @LastEditors: 胡苏珍 1628469970@qq.com
 * @LastEditTime: 2022-11-25 17:55:43
 * @FilePath: \trace\src\components\AddRecord.vue
 * @Description: 添加商品流通记录
-->
<template>
  <el-dialog
    :model-value="show"
    title="Warning"
    width="30%"
    center
    :append-to-body="true"
    @close="closeDialog"
  >
    <el-form :model="params" :inline="true">
      <el-form-item label="操作账户地址">
        <el-input v-model="params._category" />
      </el-form-item>
      <el-form-item label="商品状态">
        <el-input v-model="params._goodsId" />
      </el-form-item>
      <el-form-item label="说明">
        <el-input v-model="params.remark" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog">Cancel</el-button>
        <el-button type="primary" @click="closeDialog"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup name="AddGood">
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
} from "vue";
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["update:show"]);
const closeDialog = () => {
  emits("update:show", false);
};
const params = ref({});
</script>

<style scoped lang="less"></style>
