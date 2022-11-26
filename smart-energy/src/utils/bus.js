/*
 * @Author: susu 1628469970@qq.com
 * @Date: 2022-11-26 20:48:36
 * @LastEditors: susu 1628469970@qq.com
 * @LastEditTime: 2022-11-26 20:48:39
 * @FilePath: \smart-energy\src\utils\bus.js
 * @Description: EventBus 组件通信
 */
import emitter from "tiny-emitter/instance";

export default {
    $on: (...args) => emitter.on(...args),
    $once: (...args) => emitter.once(...args),
    $off: (...args) => emitter.off(...args),
    $emit: (...args) => emitter.emit(...args),
};
