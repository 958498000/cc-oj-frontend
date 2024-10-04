import { routeLocationKey } from "vue-router";
import { StoreOptions } from "vuex";
import ACCESS_ENUM from "@/access/accessEnum";
export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      userRole: ACCESS_ENUM.NOT_LOGIN,
    },
  }),
  getters: {},
  actions: {
    getLoginUser({ commit, state }, payload) {
      //  todo进行一些处理后提交 mutation 来更新状态
      commit("updateUser", payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
