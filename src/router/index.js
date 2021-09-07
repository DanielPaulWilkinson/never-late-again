import Vue from "vue";
import Router from "vue-router";
import Home from "../views/youtube";
import NotFound from "../views/youtube";
import About from "../views/youtube";
import Reddit from "../views/reddit";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/youtube", name: "youtube", component: Home },
    { path: "/reddit", name: "reddit", component: Reddit },
    { path: "/about", name: "about", component: About },
    { path: "*", component: NotFound },
  ],
});
