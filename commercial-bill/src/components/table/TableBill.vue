<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 17:17:12
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-28 22:50:12
 * @FilePath: \commercial-bill\src\components\TableBill.vue
 * @Description: 我的票据
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
          @click="(showEndorseDialog = true), (state.currRow = row)"
        >
          <span>背书</span>
          <el-icon size="18" color="#0072f5"><Connection /></el-icon>
        </div>
        <div
          class="flex-row action-btn mr20"
          @click="(showReciveDialog = true), (state.currRow = row)"
        >
          <span>签收</span>
          <el-icon size="18" color="#0072f5"><Finished /></el-icon>
        </div>
        <div
          class="flex-row action-btn"
          @click="(showRefuseDialog = true), (state.currRow = row)"
        >
          <span>拒绝</span>
          <el-icon size="18" color="#0072f5"><DocumentDelete /></el-icon>
        </div>
      </div>
    </template>
  </BasePageTable>
  <BillEndorse
    v-model:show="showEndorseDialog"
    :curr="state.currRow"
    @query="updateList"
  />
  <BillRecive
    v-model:show="showReciveDialog"
    :curr="state.currRow"
    @query="updateList"
  />
  <BillRefuse
    v-model:show="showRefuseDialog"
    :curr="state.currRow"
    @query="updateList"
  />
</template>
<script setup>
import { ref, reactive, onBeforeUnmount } from "vue";
import mitter from "@/utils/bus.js";
import { MY_BILL_COLUMNS } from "@/constant/column";
import { getBillList } from "@/api";
//背书 签收，拒绝弹框
const showEndorseDialog = ref(false),
  showReciveDialog = ref(false),
  showRefuseDialog = ref(false);
// 页面参数
const state = reactive({
  total: 0, //列表总条数
  tableData: [], //列表数据
  columns: MY_BILL_COLUMNS, //列表字段属性
  currRow: {}, //当前选中的数据
});
// 查询参数
let params = reactive({
  page: 1,
  pageSize: 20,
});
// 获取列表数据
const getListData = async (e) => {
  params = e;
  try {
    const { code, data, total } = await getBillList(e);
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
mitter.$on("getBillData", getListData);
// 在组件卸载之前移除监听
onBeforeUnmount(() => {
  mitter.$off("getBillData");
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
  span {
    padding-right: 8px;
  }
}
</style>
