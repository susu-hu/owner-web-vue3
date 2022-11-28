<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 15:29:46
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-25 23:09:02
 * @FilePath: \trace\src\components\PageInfo.vue
 * @Description: 商品当前状态
-->
<template>
  <div class="flex-row j_b page-info flex-row">
    <div class="page-info-detail flex-row">
      <BaseTitle data="商品类别:" />
      <p>{{ data?._category || "--" }}</p>
    </div>
    <div class="page-info-detail flex-row">
      <BaseTitle data="商品ID：" />
      <p>{{ data?._goodsId || "--" }}</p>
    </div>
    <div class="page-info-detail flex-row">
      <BaseTitle data="当前状态:" />
      <p>{{ data?._status || "--" }}</p>
    </div>
  </div>
</template>

<script setup name="PageInfo">
const props = defineProps({
  data: {
    type: Object,
    default: () => {}, //当前商品分类信息
  },
});
</script>

<style scoped lang="less">
.page-info {
  width: 100%;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 12px 20px 6px rgb(104 112 118 / 8%);
  &-detail > p {
    margin-left: 20px;
    max-width: 280px;
  }
}
</style>
