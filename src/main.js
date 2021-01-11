import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import "./registerServiceWorker";
import momentTimeZone from "moment-timezone";

Vue.prototype.momentTimeZone = momentTimeZone;

axios.defaults.baseURL = "http://localhost:3000/api/";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
