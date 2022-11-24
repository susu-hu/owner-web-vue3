<!--
 * @Author: 胡苏珍 1628469970@qq.com
 * @Date: 2022-11-24 14:33:42
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-24 20:28:23
 * @FilePath: \trace\src\components\PageBg.vue
 * @Description: 毛玻璃-背景
-->
<template>
  <div class="container-bg">
    <div class="container-bg-polygon-1"></div>
    <div class="container-bg-polygon-2"></div>
    <div class="container-bg-polygon-3"></div>
  </div>
</template>

<script setup name="PageBg"></script>

<style scoped lang="less">
.container {
  &-bg {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    & > div {
      position: absolute;
      opacity: 0.5;
    }
    &-polygon-1 {
      bottom: 100px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 714px;
      height: 390px;
      background: linear-gradient(#ffee55, #fdee99);
      -webkit-clip-path: polygon(0 10%, 30% 0, 100% 40%, 70% 100%, 20% 90%);
      clip-path: polygon(0 10%, 30% 0, 100% 40%, 70% 100%, 20% 90%);
    }

    &-polygon-2 {
      bottom: 0px;
      left: 30%;
      transform: translate(-50%, 0);
      width: 1000px;
      height: 450px;
      background: linear-gradient(-36deg, #e950d1, #f980d9);
      -webkit-clip-path: polygon(10% 0, 100% 70%, 100% 100%, 20% 90%);
      clip-path: polygon(10% 0, 100% 70%, 100% 100%, 20% 90%);
    }

    &-polygon-3 {
      bottom: 0px;
      left: 70%;
      transform: translate(-50%, 0);
      width: 1000px;
      height: 450px;
      background: skyblue;
      -webkit-clip-path: polygon(80% 0, 100% 70%, 100% 100%, 20% 90%);
      clip-path: polygon(80% 0, 100% 70%, 100% 100%, 20% 90%);
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      -webkit-backdrop-filter: blur(150px);
      backdrop-filter: blur(150px);
      z-index: 1;
    }
  }
}
</style>
