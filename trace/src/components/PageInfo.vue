<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 15:20:20
 * @LastEditors: 胡苏珍 1628469970@qq.com
 * @LastEditTime: 2022-11-24 15:36:31
 * @FilePath: \trace\src\components\PageTable.vue
 * @Description: 商品流通列表
-->
<template>
  <div class="flex-row">
    <div>商品类别：{{ dataInfo._category }}</div>
    <div>商品ID：{{ dataInfo._goodsId }}</div>
    <div>当前状态:{{ dataInfo._status }}</div>
  </div>
</template>

<script setup name="PageInfo">
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
} from "vue";
const dataInfo = {
  _goodsId: "商品ID",
  _category: "商品类别",
  _status: "当前状态",
};
</script>

<style scoped lang="less"></style>
