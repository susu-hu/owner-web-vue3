<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 15:20:20
 * @LastEditors: 胡苏珍 1628469970@qq.com
 * @LastEditTime: 2022-11-25 17:56:59
 * @FilePath: \trace\src\components\PageTable.vue
 * @Description: 商品流通列表
-->
<template>
  <el-table :data="tableData" height="250" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <el-pagination background layout="prev, pager, next" :total="1000" />
</template>

<script setup name="PageTable">
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
} from "vue";
// const state = ref({
//   tableData: [],
// });
// let { tableData } = toRefs(state);
// onMounted(() => {
//   getListData();
// });
// const getListData = () => {
//   tableData = [
//     {
//       addr: "测试",
//       status: "状态",
//       timestamp: "操作时间",
//       remark: "说明",
//     },
//   ];
//   console.log(tableData);
// };
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-08",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-06",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-07",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<style scoped lang="less"></style>
