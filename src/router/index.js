import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// All the views
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import WithProps from "../views/WithProps.vue";
import Nested from "../views/Nested.vue";
import Animated from "../views/Animated.vue";
import Dynamic from "../views/Dynamic.vue";
import Guarded from "../views/Guarded.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";
import Component from "../views/Component.vue";
import HelloWorld from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/with-wrap",
    component: {
      render: (h) => h("div", ["Страница созданная render-функцией"]),
    },
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/with-title",
    component: HelloWorld,
    meta: {
      name: "HelloWorld",
    },
  },
  {
    path: "/with-props",
    component: WithProps,
    props: { sidebar: false },
  },
  {
    path: "/dynamic/:id",
    component: Dynamic,
    props: true,
  },
  {
    path: "/nested-home",
    component: Home,
    children: [
      {
        name: "nested-home",
        path: "nested",
        component: Nested,
      },
    ],
  },
  {
    path: "/page",
    component: {
      render: (h) => h("div", ["Page", h("router-view")]),
    },
    children: [
      {
        path: "/page/:id",
        component: Component,
        props: true,
        children: [
          {
            path: "child",
            component: {
              render: function (h) {
                return h("div", [
                  "Третья вложенность. Компонент с пропсами ",
                  this.propToChild,
                ]);
              },
              props: {
                propToChild: {
                  type: Number,
                },
              },
            },
          },
        ],
      },
    ],
  },
  {
    path: "/router-views",
    component: {
      render: (h) => h("div", ["Несколько router-view", h("router-view")]),
    },
    children: [
      {
        path: ":id",
        component: Component,
        props: true,
        children: [
          {
            path: "child/:isUser?",
            components: {
              default: { render: (h) => h("div", ["По умолчанию"]) },
              user: { render: (h) => h("div", ["router-view name - user"]) },
              guest: { render: (h) => h("div", ["router-view name - guest"]) },
            },
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/very-secure",
    component: Guarded,
    beforeEnter: (to, from, next) => {
      let isAuthenticated;
      try {
        isAuthenticated = sessionStorage.getItem("authenticated");
      } catch (error) {
        return next({ path: "/login" });
      }

      return isAuthenticated ? next() : next({ path: "/login" });
    },
  },
  {
    // будет соответствовать всему
    path: "*",
    component: NotFound,
  },
  {
    path: "/lazy-loaded",
    name: "lazyLoaded",
    // такая запись создает отдельный чанк (lazyloaded.[хэш].js) для этого маршрута
    // который загружается с задержкой при переходе на маршрут.
    component: () =>
      import(/* webpackChunkName: "lazyLoaded" */ "../views/LazyLoaded.vue"),
  },
  {
    path: "/animated",
    component: Animated,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { name } = to.meta;
  document.title = name ? name : "";
  next();
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    // Запустить отображение загрузки
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  // Завершить отображение загрузки
  NProgress.done();
});

export default router;
