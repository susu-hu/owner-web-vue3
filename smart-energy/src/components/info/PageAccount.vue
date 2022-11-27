<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 16:07:13
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-27 17:16:36
 * @FilePath: \smart-energy\src\components\PageAccount.vue
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
      >
        <el-tooltip
          class="box-item"
          effect="light"
          :content="item.label"
          placement="left-start"
        >
          <p class="text_ellipsis" style="width: 150px">{{ item.label }}</p>
        </el-tooltip>
      </el-option>
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
      let options = data.map((item, index) => {
        return {
          value: index,
          label: "账户" + (index + 1) + "(" + item + ")",
        };
      });
      state.accountList = options;
      if (options?.length) {
        accounts.value = options[0].value;
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
  mitter.$emit("getEnergyData", p);
  mitter.$emit("getPurchasedData", p);
  mitter.$emit("getSalesdData", p);
};
</script>
