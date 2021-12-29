import { createRouter } from "vue-router";

const routes = [{
  path: "/",
  name: "home",
  component: () => import("./views/Home"),
  meta: {}
}, {
  path: "/about",
  name: "about",
  component: () => import("./views/About"),
  meta: {}
}];

export default function(history) {
  return createRouter({
    history,
    routes
  });
}