<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 19:24:14
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-27 01:34:01
 * @FilePath: \asset-transformation\src\components\TableAssets.vue
 * @Description: 我的资产
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
      <div class="flex-row">
        <div
          class="flex-row action-btn mr20"
          @click="(showTransferDialog = true), (state.currRow = row)"
        >
          <span>转移</span>
          <el-icon size="18" color="#0072f5"><Position /></el-icon>
        </div>
        <div
          class="flex-row action-btn"
          @click="(showDestoryDialog = true), (state.currRow = row)"
        >
          <span>销毁</span>
          <el-icon size="18" color="#0072f5"><DocumentDelete /></el-icon>
        </div>
      </div>
    </template>
  </BasePageTable>
  <AssetDestory
    v-model:show="showDestoryDialog"
    :curr="state.currRow"
    @query="updateList"
  />
  <AssetTransfer
    v-model:show="showTransferDialog"
    :curr="state.currRow"
    @query="updateList"
  />
</template>
<script setup>
import { ref, reactive, toRefs, onBeforeUnmount } from "vue";
import mitter from "@/utils/bus.js";
import { DEPOSIT_COLUMNS } from "@/constant/column";
import { getPurchasedList } from "@/api";
//销毁,转移弹框
const showDestoryDialog = ref(false),
  showTransferDialog = ref(false);
// 页面参数
const state = reactive({
  total: 0, //列表总条数
  tableData: [], //列表数据
  columns: DEPOSIT_COLUMNS, //列表字段属性
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
mitter.$on("getMyDepositData", getListData);
// 在组件卸载之前移除监听
onBeforeUnmount(() => {
  mitter.$off("getMyDepositData");
});
//更新列表
const updateList = () => {
  params.page = 1;
  getListData(params);
};
</script>
<style lang="less" scoped>
.action-btn {
  cursor: pointer;
  color: #0072f5;
  letter-spacing: 1px;
  text-shadow: 0 2px 2px rgba(94, 162, 239, 0.6);
  span {
    padding-right: 8px;
  }
}
</style>
