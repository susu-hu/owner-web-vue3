<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 16:13:23
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 18:05:01
 * @FilePath: \commercial-paper\src\components\base\BaseTable.vue
 * @Description: 通用表格
-->
<template>
  <el-table :data="data" style="width: 100%" max-height="280">
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
          <template #default="{ row, $index }" v-if="!item.type">
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
