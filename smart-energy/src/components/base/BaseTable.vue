<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 16:13:23
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 16:37:01
 * @FilePath: \smart-energy\src\components\base\BaseTable.vue
 * @Description: 通用表格
-->
<template>
  <el-table :data="data" style="width: 100%" height="100%">
    <template v-for="item in columns">
      <!-- 序号列 -->
      <template v-if="item.type">
        <el-table-column
          :key="item.type"
          :width="item.width"
          :label="item.label"
          :type="item.type"
          :show-overflow-tooltip="item.showtip"
          :fixed="item.fixed"
        />
      </template>
      <template v-else>
        <!-- 循环遍历表头展示数据 -->
        <el-table-column
          :key="item.prop || item.slot"
          :width="item.width"
          :label="item.label"
          :prop="item.prop"
          :sortable="item.sortable"
          :show-overflow-tooltip="item.showtip"
          :fixed="item.fixed"
        >
          <template #="{ row, $index }" v-if="!item.type">
            <!-- 自定义插槽 -->
            <slot
              v-if="item.slot"
              :name="item.slot"
              :row="row"
              :index="$index"
            ></slot>
            <!-- 空数据--显示 -->
            <span v-else>{{ row[item.prop] }}</span>
          </template>
        </el-table-column>
      </template>
    </template>
  </el-table>
</template>
<script setup name="BaseTable">
import { ref, reactive, toRefs, computed, watch } from "vue";
const props = defineProps({
  columns: {
    type: Array,
    default: () => [], //表格列字段
  },
  data: {
    type: Array,
    default: () => [], //表格数据
  },
});
</script>
<style lang="less" scoped>
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
</style>
