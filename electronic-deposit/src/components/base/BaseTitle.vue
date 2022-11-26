<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-25 20:12:46
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 23:27:44
 * @FilePath: \electronic-deposit\src\components\BaseTitle.vue
 * @Description: 页面标题
-->
<template>
  <span class="base-title">{{ data }}</span>
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
  padding-left: 10px;
  &::before {
    content: "";
    position: absolute;
    left: 0px;
    top: calc(50% - 40%);
    width: 4px;
    height: 80%;
    background: #83c2ee;
  }
}
</style>
