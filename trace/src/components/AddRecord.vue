<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-24 20:25:29
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-24 20:39:26
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
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
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
</script>

<style scoped lang="less"></style>
