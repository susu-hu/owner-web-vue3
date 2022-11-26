<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 11:43:22
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 12:53:23
 * @FilePath: \trace\src\views\index.vue
 * @Description: 首页
-->
<template>
  <div class="container flex-column">
    <!-- <PageBg /> -->
    <h2>供应链防伪溯源系统</h2>
    <div class="head-search flex">
      <el-form :model="params" :inline="true" label-width="100">
        <el-form-item label="商品类别:" class="head-search-item">
          <el-input
            v-model="params._category"
            clearable
            placeholder="请输入商品类别"
          />
        </el-form-item>
        <el-form-item label="商品ID:" class="head-search-item">
          <el-input
            v-model="params._goodsId"
            clearable
            placeholder="请输入商品ID"
          />
        </el-form-item>
      </el-form>
      <BaseButton data="查找" @click="searchInfo" />
      <BaseButton data="创建" @click="showGoodDialog = true" />
    </div>
    <PageInfo :data="state.goodInfo" />
    <div class="flex-row head-record j_b">
      <BaseTitle data="商品流通记录" />
      <BaseButton data="添加记录" @click="showRecordDialog = true" />
    </div>
    <PageTable
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
import axios from "axios";
import { ref, reactive } from "vue";
import { getGoodRecords } from "@/api";
const showGoodDialog = ref(false),
  showRecordDialog = ref(false);
// 页面参数
const state = reactive({
  total: 0, //列表总条数
  tableData: [], //列表数据
  goodInfo: {},
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
  .head-search {
    margin-top: 40px;
    padding: 10px;
    &-item {
      width: 300px;
    }
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
