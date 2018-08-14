import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NavTop from "./views/NavTop.vue";
import NavBtm from "./views/NavBtm.vue";
//import Home from "./components/Cards.vue";
//import Home from "./components/Homie.vue";
import NotFoundComponent from "./views/404.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      //component: Home
      components: {
        default: Home,
        navtop: NavTop,
        navbtm: NavBtm
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () =>
      //import(/* webpackChunkName: "about" */ "./views/About.vue")
      components: {
        default: () => import("./views/About.vue"),
        navtop: NavTop,
        navbtm: NavBtm
      }
    },
    {
      path: "/playground",
      name: "Playground",
      //component: () => import("@/components/Playground")
      components: {
        default: () => import("@/components/Playground"),
        navtop: NavTop,
        navbtm: NavBtm
      }
    },
    {
      path: "*",
      //component: NotFoundComponent
      components: {
        default: NotFoundComponent,
        navtop: NavTop,
        navbtm: NavBtm
      }
    }
  ]
});
