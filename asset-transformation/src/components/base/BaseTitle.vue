<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-25 20:12:46
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-27 00:09:39
 * @FilePath: \asset-transformation\src\components\BaseTitle.vue
 * @Description: 页面标题
-->
<template>
  <span class="base-title"><span></span>{{ data }}</span>
</template>
<script setup name="BaseTitle">
const props = defineProps({
  data: {
    type: String,
    default: "标题",
  },
});
</script>
<style lang="less" scoped>
.base-title {
  font-weight: bold;
  position: relative;
  padding-left: 15px;
  span {
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-left: 10px solid #0072f5;
    filter: drop-shadow(0px 5px 10px #5ea2ef);
  }
}
</style>
