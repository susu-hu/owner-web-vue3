<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 15:29:46
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 15:43:56
 * @FilePath: \smart-energy\src\components\PageInfo.vue
 * @Description:能源销售量/购买量/出售量/购买量/可提取余额
-->
<template>
  <div class="flex-row j_b page-info">
    <div class="flex-column j_c page-info-item">
      <p><BaseNumScroll :endVal="state.totalSellEnergy" />/度</p>
      <p><BaseTitle data="能源销售量" /></p>
    </div>
    <div class="flex-column j_c page-info-item">
      <p><BaseNumScroll :endVal="state.totalSellEnergy" />/度</p>
      <p><BaseTitle data="能源购买量" /></p>
    </div>
    <div class="flex-column j_c page-info-item">
      <p><BaseNumScroll :endVal="state.totalSellEnergy" />/笔</p>
      <p><BaseTitle data="我的出售量" /></p>
    </div>
    <div class="flex-column j_c page-info-item">
      <p><BaseNumScroll :endVal="state.totalSellEnergy" />/笔</p>
      <p><BaseTitle data="我的购买量" /></p>
    </div>
    <div class="flex-column j_c page-info-item">
      <p><BaseNumScroll :endVal="state.totalSellEnergy" />/ETH</p>
      <p><BaseTitle data="可提取余额" /></p>
    </div>
  </div>
</template>

<script setup name="PageInfo">
import { ref, reactive } from "vue";
const state = reactive({
  totalSellEnergy: 100, //能源销售量
  totalBuyEnergy: 200, //
});
</script>

<style scoped lang="less">
.page-info {
  width: 100%;
  margin: 10px;
  padding: 20px;
  border: 1px solid red;
  letter-spacing: 4px;
  font-weight: bold;
  text-shadow: 0 2px 2px rgba(20, 20, 20, 0.4);
  font-size: 20px;
  &-item {
    width: 18%;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 12px 20px 6px rgb(104 112 118 / 8%);
    padding: 20px 0;
    p:last-child {
      margin-top: 10px;
      font-size: 15px;
    }
  }
}
</style>
