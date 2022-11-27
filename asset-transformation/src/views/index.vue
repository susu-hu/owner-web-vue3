<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 11:43:22
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-27 15:27:13
 * @FilePath: \asset-transformation\src\views\index.vue
 * @Description: 首页
-->
<template>
  <div class="container flex-column">
    <h2>区块链资产转移系统</h2>
    <div class="flex head-account">
      <PageAccount />
    </div>
    <PageInfo />
    <div class="head-record">
      <p class="head-record-title mb10">
        <BaseTitle data="所有待批准的资产请求列表" />
      </p>
      <TableApproval />
    </div>
    <div class="head-record">
      <div class="flex-row j_b mb10">
        <BaseTitle data="我的资产请求列表" class="head-record-title" />
        <BaseButton data="发起请求" @click="showSaleDialog = true" />
      </div>
      <TableRequest />
    </div>
    <div class="head-record">
      <p class="head-record-title mb10">
        <BaseTitle data="我的资产" />
      </p>
      <TableAssets />
    </div>
  </div>
  <AssetRquest v-model:show="showSaleDialog" />
</template>

<script setup>
import { ref, reactive } from "vue";
import mitter from "@/utils/bus.js";
// 出售能源
const showSaleDialog = ref(false);
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
</style>
