<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 17:17:12
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-27 19:08:43
 * @FilePath: \smart-energy\src\components\TableEnergy.vue
 * @Description: 能源列表
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
        v-if="row.can_by"
        class="flex-row action-btn"
        @click="(showBuyDialog = true), (state.currRow = row)"
      >
        <span>购买</span>
        <el-icon size="18" color="#0072f5"><ShoppingCartFull /></el-icon>
      </div>
    </template>
  </BasePageTable>
  <EnergyBuy
    v-model:show="showBuyDialog"
    :curr="state.currRow"
    @query="updateList"
  />
</template>
<script setup>
import { ref, reactive, toRefs, onBeforeUnmount } from "vue";
import mitter from "@/utils/bus.js";
import { ENERY_COLUMNS } from "@/constant/column";
import { getEnergyList } from "@/api";
//购买弹框
const showBuyDialog = ref(false);
// 页面参数
const state = reactive({
  total: 0, //列表总条数
  tableData: [], //列表数据
  columns: ENERY_COLUMNS, //列表字段属性
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
    const { code, data, total } = await getEnergyList(e);
    if (code == 200) {
      data.forEach((item) => {
        item.can_by = item.initiator !== "条件";
      });
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
mitter.$on("getEnergyData", getListData);
// 在组件卸载之前移除监听
onBeforeUnmount(() => {
  mitter.$off("getEnergyData");
});
//更新列表
const updateList = () => {
  params.page = 1;
  getListData(params);
  // 更新我的购买记录列表
  mitter.$emit("getPurchasedData", params);
};
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
