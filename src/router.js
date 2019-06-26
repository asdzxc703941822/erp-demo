import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/main",
      component: Home
    },
    {
      path: "/main",
      name: "main",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/Main.vue"),
      children: [
        { path: "test", name: "test", component: () => import("./views/pages/test.vue") },
        { path: "test2", name: "test2", component: () => import("./views/pages/test2.vue") }
      ]
    }
  ]
});
