<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 16:07:13
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-27 15:58:52
 * @FilePath: \asset-transformation\src\components\PageAccount.vue
 * @Description: 当前账户
-->
<template>
  <el-form-item label="当前账户:">
    <el-select
      v-model="accounts"
      clearable
      placeholder="请选择"
      @change="getInitData"
    >
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
import { ref, reactive, toRefs, computed, watch } from "vue";
import mitter from "@/utils/bus.js";
import { getAccounts } from "@/api";
// 当前账户
const accounts = ref("");
const state = reactive({
  accountList: [], // 账户列表
});
// 获取所有账户列表
(async () => {
  try {
    const { code, data } = await getAccounts();
    if (code == 200) {
      state.accountList = data;
      if (data?.length) {
        accounts.value = data[0].value;
        getInitData(accounts.value);
      }
    }
  } catch (err) {}
})();
const getInitData = (e) => {
  mitter.$emit("accounts", e);
  let p = {
    accounts: e,
    page: 1,
    pageSize: 20,
  };
  mitter.$emit("getAccountInfo", e);
  mitter.$emit("getApprovalData", p);
  mitter.$emit("getMyDepositData", p);
  mitter.$emit("getRequestData", p);
};
</script>
<style lang="less" scoped></style>
