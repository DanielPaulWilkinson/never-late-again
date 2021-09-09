import Vue from "vue";
import Router from "vue-router";
import Home from "../views/youtube";
import NotFound from "../views/notfound";
import Reddit from "../views/reddit";
import Dashboard from "../views/dashboard";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "dashboard", component: Dashboard },
    { path: "/dashboard", redirect: '/' },
    { path: "/home", redirect: '/' },
    { path: "/youtube", name: "youtube", component: Home },
    { path: "/reddit", name: "reddit", component: Reddit },
    { path: "*", component: NotFound },
  ],
});
