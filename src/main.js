import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { $bus } from "./bus";
import { Layout, Menu, Tabs, Icon, Form, Input, Checkbox, Button, Col, Row } from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Form);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.prototype.$bus = $bus;
Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
