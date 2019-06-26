import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { $bus } from "./bus";
import { Layout, Menu, Tabs, Icon } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Tabs);
Vue.use(Icon);
Vue.prototype.$bus = $bus;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
