import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import http from "./utils/request";
// import Antd from "ant-design-vue"
// import 'ant-design-vue/dist/antd.less'
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
  Dropdown,
  LocaleProvider,
  DatePicker
} from "ant-design-vue";
import Authorized from "./components/authorized.vue";
import Auth from "./directives/auth";
// Vue.use(Antd)
// Vue.component(Button.name, Button);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.component("Authorized", Authorized);
Vue.use(Auth);
Vue.use(LocaleProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.config.productionTip = false;

Vue.prototype.$http = http;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
