import { routeLocationKey } from "vue-router";
import { StoreOptions } from "vuex";
export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "notLogin",
    },
  }),
  actions: {
    getLoginUser({ commit, state }, payload) {
      //  todo进行一些处理后提交 mutation 来更新状态
      commit("updateUser", { userName: "西西" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
