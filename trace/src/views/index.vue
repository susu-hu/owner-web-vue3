<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 11:43:22
 * @LastEditors: 胡苏珍 1628469970@qq.com
 * @LastEditTime: 2022-11-24 15:57:01
 * @FilePath: \trace\src\views\index.vue
 * @Description: 首页
-->
<template>
  <div class="container flex-column">
    <PageBg />
    <h2>供应链防伪溯源系统</h2>
    <div class="head-search">
      <el-form :model="params" :inline="true">
        <el-form-item label="商品类别">
          <el-input v-model="params._category" />
        </el-form-item>
        <el-form-item label="商品ID">
          <el-input v-model="params._goodsId" />
        </el-form-item>
      </el-form>
      <el-button type="primary">查找</el-button>
      <el-button type="primary">创建</el-button>
    </div>
    <PageInfo />
    <div class="flex-row">
      <p>商品流通记录</p>
      <el-button type="primary">添加记录</el-button>
    </div>
    <PageTable />
  </div>
  <AddGood v-model:show="showGoodDialog" />
</template>

<script setup>
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
} from "vue";
const params = ref({});
const showGoodDialog = ref(false);
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 60px 40px 40px;
  h2 {
    font-size: 38px;
    color: #2d3d50;
    letter-spacing: 4px;
    text-shadow: 0 2px 2px rgba(20, 20, 20, 0.4);
  }
}
</style>
