<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 15:29:46
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 22:55:56
 * @FilePath: \electronic-deposit\src\components\PageInfo.vue
 * @Description:能源销售量/购买量/出售量/购买量/可提取余额
-->
<template>
  <div class="flex-row j_b page-info">
    <div class="flex-column j_c page-info-item">
      <p><BaseNumScroll :endVal="state.totalSellEnergy" />/度</p>
      <p><BaseTitle data="总存证数" /></p>
    </div>
    <div class="flex-column j_c page-info-item">
      <p><BaseNumScroll :endVal="state.totalBuyEnergy" />/度</p>
      <p><BaseTitle data="待批准请求数" /></p>
    </div>
    <div class="flex-column j_c page-info-item">
      <p><BaseNumScroll :endVal="state.totalSellEnergy" />/笔</p>
      <p><BaseTitle data="我的存证数量" /></p>
    </div>
    <div class="flex-column j_c page-info-item">
      <p><BaseNumScroll :endVal="state.totalSellEnergy" />/笔</p>
      <p><BaseTitle data="目标批准人数" /></p>
    </div>
  </div>
</template>

<script setup name="PageInfo">
import { ref, onBeforeUnmount } from "vue";
import mitter from "@/utils/bus.js";
import { getAcccountInfo } from "@/api";
let state = ref({
  totalSellEnergy: 0, //能源销售量
  totalBuyEnergy: 0, //能源购买量
  accountBalance: 0, //账户余额
  //TO DO...
});
const getDataInfo = async (e) => {
  try {
    const { code, data } = await getAcccountInfo({ accounts: e });
    if (code == 200) {
      state.value = data;
    }
  } catch (err) {}
};
mitter.$on("getAccountInfo", getDataInfo);
// 在组件卸载之前移除监听
onBeforeUnmount(() => {
  mitter.$off("getAccountInfo");
});
</script>

<style scoped lang="less">
.page-info {
  width: 100%;
  padding: 10px;
  letter-spacing: 4px;
  font-weight: bold;
  text-shadow: 0 2px 2px rgba(20, 20, 20, 0.4);
  font-size: 20px;
  &-item {
    width: 23%;
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
