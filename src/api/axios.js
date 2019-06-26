import axios from "axios";
import { message } from "ant-design-vue";
message.config({
  top: `100px`,
  duration: 2,
  maxCount: 3
});
let service = axios.create({
  timeout: 10000
});
service.defaults.baseURL = "http://192.168.1.99:53556/";
service.defaults.headers.post["Content-Type"] = "application/json";
//请求拦截
service.interceptors.request.use(
  confing => {
    console.log("request config", confing);
    return confing;
  },
  error => {
    console.log("请求出错");
    return Promise.reject(error);
  }
);
//响应拦截
service.interceptors.response.use(
  response => {
    let { data: res } = response;
    let { code, data, msg } = res;
    if (code !== 0) {
      message.warning(msg);
      return Promise.reject(response);
    }
    // 对响应数据做点什么
    return data;
  },
  error => {
    let message = "网络错误";
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          message = "请求错误";
          break;
        case 401:
          message = "未授权或登录信息已过期，3秒后跳到登录界面";
          //   setTimeout(() => {
          //     localStorage.removeItem("access_token");
          //     window.location.href = "index.html";
          //   }, 3000);
          break;
        case 403:
          message = "拒绝访问";
          break;
        case 404:
          message = `请求地址出错: ${error.response.config.url}`;
          break;
        case 408:
          message = "请求超时";
          break;
        case 500:
          message = "服务器内部错误";
          break;
        case 501:
          message = "服务未实现";
          break;
        case 502:
          message = "网关错误";
          break;
        case 503:
          message = "服务不可用";
          break;
        case 504:
          message = "网关超时";
          break;
        case 505:
          message = "HTTP版本不受支持";
          break;
        default:
          break;
      }
    }
    message.warning(message);
    return Promise.reject(error);
  }
);
export default function() {
  return service;
}
