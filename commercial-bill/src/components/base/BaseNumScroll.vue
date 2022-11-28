<!--
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 15:17:56
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 19:35:52
 * @FilePath: \commercial-bill\src\components\BaseNumScroll.vue
 * @Description: 数字滚动,默认展示文本
-->
<template>
  <span v-if="showType">{{ numData }}</span>
  <count-to
    :start-val="startVal"
    :end-val="numData"
    :duration="duration"
    :decimals="decimals"
    v-else
  />
</template>

<script setup name="BaseNumScroll">
import { ref, watch, computed } from "vue";
import { CountTo } from "vue3-count-to";
const props = defineProps({
  endVal: {
    type: [String, Number],
    default: "--", //内容
  },
  startVal: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 5000,
  },
  decimals: {
    type: Number,
    default: 0,
  },
});
const showType = ref(true);
const numData = computed(() => {
  if (isNaN(props.endVal)) {
    return "--";
  } else {
    return props.endVal;
  }
});
watch(
  () => props.endVal,
  (n) => {
    showType.value = typeof n == "string" && n.constructor == String;
    showType.value = isNaN(props.endVal);
  },
  { immediate: true }
);
</script>
