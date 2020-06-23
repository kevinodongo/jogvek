import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
Vue.use(AmplifyPlugin, AmplifyModules);
//uuid
import UUID from "vue-uuid";
Vue.use(UUID);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
