// store/index.js

import { createStore } from "vuex";
import { authPageModule } from "./auth-store/index.js";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    authPageModule,
  },
});
