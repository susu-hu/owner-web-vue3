<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 11:43:22
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 16:55:56
 * @FilePath: \smart-energy\src\views\index.vue
 * @Description: 首页
-->
<template>
  <div class="container flex-column">
    <h2>基于区块链的智慧能源交易系统</h2>
    <div class="flex head-account">
      <CurrAccount />
    </div>
    <PageInfo :data="state.goodInfo" />
    <BasePageTable
      :columns="state.columns"
      :data="state.tableData"
      :total="state.total"
      :page-size="params.pageSize"
      :curr-page="params.page"
      @current-change="handleCurrentChange"
    />
  </div>
  <AddGood v-model:show="showGoodDialog" />
  <AddRecord v-model:show="showRecordDialog" @query="updateList" />
</template>

<script setup>
import { ref, reactive } from "vue";
import { getGoodRecords } from "@/api";
const showGoodDialog = ref(false),
  showRecordDialog = ref(false);
// 页面参数
const state = reactive({
  total: 0, //列表总条数
  tableData: [], //列表数据
  goodInfo: {},
  columns: [
    {
      prop: "addr",
      label: "地址",
    },
  ], //列表字段属性
});
// 查询参数
const params = reactive({
  _category: "",
  _goodsId: "",
  page: 1,
  pageSize: 20,
});
// 查找按钮点击事件
const searchInfo = () => {
  getGoodInfo(params);
  getListData(params);
};
// 获取商品当前信息
const getGoodInfo = async (e) => {
  try {
    let info = {
      _category: "电子产品",
      _goodsId: "0002",
      _status: "有效",
    };
    state.goodInfo = info;
  } catch (err) {}
};
// 获取商品流通记录
const getListData = async (e) => {
  try {
    const { code, data, total } = await getGoodRecords(e);
    if (code == 200) {
      state.tableData = data;
      state.total = total;
    }
  } catch (err) {}
};
getListData(params);
//页数切换
const handleCurrentChange = (e) => {
  params.page = e;
  getListData(params);
};
//更新流通记录列表
const updateList = () => {
  params.page = 1;
  getListData(params);
};
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
    text-shadow: 0 2px 2px rgba(20, 20, 20, 0.4);
  }
  .head-record {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
  }
}
::v-deep(.el-form-item) {
  margin-bottom: 0 !important;
}
</style>
