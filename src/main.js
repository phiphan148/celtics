import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import VueFrame from 'vue-frame'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
    // VueFrame,
  render: h => h(App)
}).$mount("#app");
