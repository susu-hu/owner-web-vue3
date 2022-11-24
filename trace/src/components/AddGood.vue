<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 15:43:47
 * @LastEditors: 胡苏珍 1628469970@qq.com
 * @LastEditTime: 2022-11-24 15:59:08
 * @FilePath: \trace\src\components\AddGood.vue
 * @Description: 创建商品
-->
<template>
  <el-dialog
    v-bind="show"
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
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
} from "vue";
const emits = defineEmits(["update:show"]);
const closeDialog = () => {
  emits("update:show", false);
};
</script>

<style scoped lang="less"></style>
