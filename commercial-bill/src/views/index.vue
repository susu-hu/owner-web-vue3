<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 11:43:22
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-28 22:41:40
 * @FilePath: \commercial-bill\src\views\index.vue
 * @Description: 首页
-->
<template>
  <div class="container flex-column">
    <h2>区块链商业票据系统</h2>
    <div class="flex head-account">
      <PageAccount @refresh="handleSearch" />
    </div>
    <div class="head-search flex-row j_c">
      <BaseButton data="发布票据" @click="showBillDialog = true" />
      <div class="head-search-content">
        <el-select v-model="params.searchKey" style="width: 105px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.value"
            :value="item.value"
          />
        </el-select>
        <el-input
          v-model="params.inputKey"
          placeholder=""
          style="width: 280px"
          clearable
        />
      </div>
      <BaseButton data="查找" @click="handleSearch" />
    </div>
    <div class="head-record">
      <p class="head-record-title mb10">
        <span class="base-title">我的票据</span>
      </p>
      <TableBill />
    </div>
  </div>
  <BillAdd v-model:show="showBillDialog" @refresh="handleSearch" />
</template>

<script setup>
import { ref, reactive, onBeforeUnmount } from "vue";
import { OPTIONS } from "@/constant/options";
import mitter from "@/utils/bus.js";
// 发布票据
const showBillDialog = ref(false);
// 选项列表
const options = OPTIONS;
// 查询关键字
const params = reactive({
  searchKey: "",
  inputKey: "",
  accounts: "",
  page: 1,
  pageSize: 20,
});
params.searchKey = options[0].value;
mitter.$on("accounts", (e) => {
  params.accounts = e;
});
// 查找
const handleSearch = () => {
  params.page = 1;
  mitter.$emit("getBillData", params);
};
onBeforeUnmount(() => {
  mitter.$off("accounts");
});
</script>
<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 50px 80px 20px;
  color: #2d3d50;
  font-size: 14px;

  h2 {
    font-size: 38px;
    letter-spacing: 4px;
    text-shadow: 0 2px 2px rgba(20, 20, 20, 0.4);
  }
  .head-account {
    width: 100%;
    justify-content: flex-end;
    margin-top: 20px;
    padding: 10px;
    letter-spacing: 4px;
  }
  .head-search {
    width: 100%;
    padding: 10px;
    &-content {
      margin: 0px 50px;
    }
  }
  .head-record {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    &-title {
      font-size: 15px;
      letter-spacing: 2px;
    }
  }
}
::v-deep(.el-form-item) {
  margin-bottom: 0 !important;
}
::v-deep(.el-input__wrapper) {
  border-radius: 0 !important;
}
</style>
