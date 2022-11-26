<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 19:24:14
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 22:37:13
 * @FilePath: \smart-energy\src\components\TablePurchased.vue
 * @Description: 我的购买记录列表
-->
<template>
  <BasePageTable
    :columns="state.columns"
    :data="state.tableData"
    :total="state.total"
    :page-size="params.pageSize"
    :curr-page="params.page"
    @current-change="handleCurrentChange"
  >
  </BasePageTable>
</template>
<script setup>
import { ref, reactive, toRefs, onBeforeUnmount } from "vue";
import mitter from "@/utils/bus.js";
import { PURCHASED_COLUMNS } from "@/constant/column";
import { getPurchasedList } from "@/api";
// 页面参数
const state = reactive({
  total: 0, //列表总条数
  tableData: [], //列表数据
  columns: PURCHASED_COLUMNS, //列表字段属性
});
// 查询参数
let params = reactive({
  accounts: "",
  page: 1,
  pageSize: 20,
});
// 获取列表数据
const getListData = async (e) => {
  params = e;
  try {
    const { code, data, total } = await getPurchasedList(e);
    if (code == 200) {
      state.tableData = data;
      state.total = total;
    }
  } catch (err) {}
};
//页数切换
const handleCurrentChange = (e) => {
  params.page = e;
  getListData(params);
};
mitter.$on("getPurchasedData", getListData);
// 在组件卸载之前移除监听
onBeforeUnmount(() => {
  mitter.$off("getPurchasedData");
});
</script>
