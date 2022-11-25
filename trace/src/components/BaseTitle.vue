<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-25 20:12:46
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-25 20:24:16
 * @FilePath: \trace\src\components\BaseTitle.vue
 * @Description: 页面标题
-->
<template>
  <span class="base-title">{{ data }}</span>
</template>
<script setup>
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
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 6px;
    background: linear-gradient(
      90deg,
      rgba(100, 189, 223, 0.09) 0%,
      rgba(126, 156, 229, 0.56) 47%,
      rgba(108, 151, 228, 0) 100%
    );
    border: 1px solid;
    border-image: linear-gradient(
        90deg,
        rgba(165, 208, 255, 0),
        rgba(137, 169, 227, 0.6),
        rgba(165, 208, 255, 0)
      )
      1 1;
  }
}
</style>
