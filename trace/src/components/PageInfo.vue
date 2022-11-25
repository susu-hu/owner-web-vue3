<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 15:29:46
 * @LastEditors: 胡苏珍 1628469970@qq.com
 * @LastEditTime: 2022-11-25 18:00:42
 * @FilePath: \trace\src\components\PageInfo.vue
 * @Description: 商品当前状态
-->
<template>
  <div class="flex-row j_b container">
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

<style scoped lang="less">
.container {
  width: 100%;
  margin: 30px;
}
</style>
