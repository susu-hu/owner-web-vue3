<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 16:38:51
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-27 00:41:24
 * @FilePath: \electronic-deposit\src\components\base\BasePageTable.vue
 * @Description: 通用表格+分页
-->
<template>
  <template v-if="data.length">
    <div class="page-table">
      <BaseTable :data="data" :columns="columns">
        <template #action="{ row, $index }">
          <slot :row="row" :index="$index"></slot>
        </template>
      </BaseTable>
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
<script setup>
const props = defineProps({
  columns: {
    type: Array,
    default: () => [], //表格列字段
  },
  data: {
    type: Array,
    default: () => [], //列表数据
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
<style lang="less" scoped>
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
    height: 125px;
  }
}
// 修改表格样式
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
  background: #f1f3f5 !important;
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
