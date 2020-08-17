import Vue from "vue";
import App from "./App.vue";

import _shared from "./Shared.js";

Vue.config.productionTip = false;

new Vue({
  computed: {
    shared() {
      return _shared;
    },
  },
  render: (h) => h(App),
}).$mount("#app");
