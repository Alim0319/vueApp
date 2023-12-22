import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

// Configure axios
app.use(VueAxios, axios);

// Configure sweet alert
const options = {
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
};
app.use(VueSweetalert2, options);

// Use router and store
app.use(router);
app.use(store);

// Use vuetify
app.use(vuetify);

// Mount the app
app.mount("#app");
