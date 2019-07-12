import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";

Vue.use(Router);
export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      // redirect: "/main",
      component: Login
    },
    {
      path: "/main",
      name: "main",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/Main.vue"),
      children: [
        {
          path: "test",
          name: "test",
          component: () => import("./views/pages/test.vue")
        },
        {
          path: "test2",
          name: "test2",
          component: () => import("./views/pages/test2.vue")
        }
      ]
    }

    // {
    //   path: "*",
    //   name: "404",
    //   component: () => import("./views/404.vue")
    // }
  ]
});
