import axios from 'axios';
import { ElMessage } from "element-plus";
// 创建 axios 实例
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 10000, // 请求超时时间
})
//  请求拦截器
service.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        // TO DO ...
        // token验证等
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const { status, data } = response;
        if (status === 200) {
            const { msg, code } = data;
            switch (code) {
                // 错误
                case 500:
                case 503:
                case 501:
                    ElMessage.error(msg || '服务端错误');
                    return Promise.reject(response);
                // 正确
                default:
                    return Promise.resolve(data)
            }
        } else {
            return Promise.reject(response);
        }
    },
    (error) => {
        if (error?.response?.status && error?.response?.data) {
            const { status, data } = error.response;
            if (status) {
                switch (status) {
                    // 404请求不存在
                    case 404:
                        ElMessage.error(data?.message || '请求不存在');
                        break;
                    // 500 服务端错误
                    case 500:
                    case 503:
                    case 501:
                        ElMessage.error('服务端错误');
                        break;
                    // 其他错误，直接抛出错误提示
                    default:
                        ElMessage.error(data?.message || '请稍后再试！');
                        break;
                }
            }
        }
        return Promise.reject(error.response);
    }
)
export default service;