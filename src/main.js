import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false; // отключает предупреждение о работе в режиме разработки при запуске Vue.

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
