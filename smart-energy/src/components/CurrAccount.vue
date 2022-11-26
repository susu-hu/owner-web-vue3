<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 16:07:13
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 17:08:54
 * @FilePath: \smart-energy\src\components\CurrAccount.vue
 * @Description: 当前账户
-->
<template>
  <el-form-item label="当前账户:">
    <el-select v-model="currAccount" clearable placeholder="请选择">
      <el-option
        v-for="item in state.accountList"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>
</template>
<script setup>
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
} from "vue";
import { getAccounts } from "@/api";
// 当前账户
const currAccount = ref("");
const state = reactive({
  accountList: [], // 账户列表
});
const getListData = async () => {
  try {
    const { code, data } = await getAccounts();
    if (code == 200) {
      state.accountList = data;
    }
  } catch (err) {}
};
getListData();
</script>
<style lang="less" scoped></style>
