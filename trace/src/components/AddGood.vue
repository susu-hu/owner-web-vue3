<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 15:43:47
 * @LastEditors: 胡苏珍 1628469970@qq.com
 * @LastEditTime: 2022-11-25 17:53:34
 * @FilePath: \trace\src\components\AddGood.vue
 * @Description: 创建商品
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
      <el-form-item label="商品类别">
        <el-input v-model="params._category" />
      </el-form-item>
      <el-form-item label="商品ID">
        <el-input v-model="params._goodsId" />
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
