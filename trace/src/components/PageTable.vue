<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 15:20:20
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 12:51:22
 * @FilePath: \trace\src\components\PageTable.vue
 * @Description: 商品流通列表
-->
<template>
  <template v-if="data.length">
    <div class="page-table">
      <el-table :data="data" max-height="480" style="width: 100%" class="table">
        <el-table-column prop="addr" label="操作账户地址" />
        <el-table-column prop="timestamp" label="操作时间" />
        <el-table-column prop="status" label="商品状态" />
        <el-table-column prop="remark" label="说明" />
      </el-table>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="props.total"
      class="pagination"
      :current-page="props.currPage"
      :page-size="props.pageSize"
      @current-change="handleCurrentChange"
    />
  </template>
  <template v-else>
    <div class="page-table flex-column j_c no-data">
      <BaseTitle data="暂无数据" />
    </div>
  </template>
</template>

<script setup name="PageTable">
const props = defineProps({
  data: {
    type: Array,
    default: () => [], //商品流通记录
  },
  total: {
    type: Number,
    default: 0, //总条数
  },
  currPage: {
    type: Number,
    default: 1, //当前页码
  },
  pageSize: {
    type: Number,
    default: 20, //一页数据
  },
});
const emits = defineEmits(["currentChange"]);
const handleCurrentChange = (e) => {
  emits("currentChange", e);
};
</script>
<style scoped lang="less">
// 修改表格样式
.page-table {
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 0 12px 20px 6px rgb(104 112 118 / 0.08);
  padding: 10px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  &.no-data {
    height: 450px;
  }
}
::v-deep(.el-table),
::v-deep(.el-table__expanded-cell) {
  background-color: transparent !important;
}
::v-deep(.el-table tr),
::v-deep(.el-table td) {
  color: #2d3d50;
  background-color: transparent !important;
}
::v-deep(.el-table th) {
  background: #f1f3f5;
  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
}
::v-deep(.el-table td.el-table__cell) {
  border-bottom: none;
}
::v-deep(.el-table__inner-wrapper::before) {
  display: none;
}
// 修改分页样式
.pagination {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
::v-deep(.el-pager li.number),
::v-deep(.el-pager li.more),
::v-deep(.btn-prev.is-first),
::v-deep(.btn-next.is-last) {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 12px 20px 6px rgb(104 112 118 / 0.2);
  border-radius: 50%;
  color: #2d3d50;
}
::v-deep(.el-pager li.number.is-active) {
  box-shadow: 0 4px 14px #5ea2ef;
  background: #0072f5;
  color: #fff;
}
</style>
