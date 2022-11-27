<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 19:23:43
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-27 15:25:52
 * @FilePath: \smart-energy\src\components\TableSales.vue
 * @Description: 我的出售记录列表
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
    <template #default="{ row }">
      <div
        class="flex-row action-btn"
        @click="(showCancelDialog = true), (state.currRow = row)"
      >
        <span>取消出售</span>
        <el-icon size="18" color="#0072f5"><Remove /></el-icon>
      </div>
    </template>
  </BasePageTable>
  <EnergyCancel
    v-model:show="showCancelDialog"
    :curr="state.currRow"
    @query="updateList"
  />
</template>
<script setup>
import { ref, reactive, toRefs, onBeforeUnmount } from "vue";
import mitter from "@/utils/bus.js";
import { SALES_COLUMNS } from "@/constant/column";
import { getSalesList } from "@/api";
//取消出售弹框
const showCancelDialog = ref(false);
// 页面参数
const state = reactive({
  total: 0, //列表总条数
  tableData: [], //列表数据
  columns: SALES_COLUMNS, //列表字段属性
  currRow: {}, //当前选中的数据
});
// 查询参数
let params = reactive({
  accounts: "",
  page: 1,
  pageSize: 20,
});
// 获取列表数据
const getListData = async (e) => {
  params = JSON.parse(JSON.stringify(e));
  try {
    const { code, data, total } = await getSalesList(e);
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
//更新出售列表
const updateList = () => {
  params.page = 1;
  getListData(params);
};
mitter.$on("getSalesdData", getListData);
// 在组件卸载之前移除监听
onBeforeUnmount(() => {
  mitter.$off("getSalesdData");
});
</script>
<style lang="less" scoped>
.action-btn {
  cursor: pointer;
  color: #0072f5;
  letter-spacing: 1px;
  span {
    padding-right: 8px;
  }
}
</style>
