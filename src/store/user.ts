import { StoreOptions } from "vuex";
import accessEnum from "@/access/accessEnum";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      userRole: accessEnum.NOT_LOGIN,
    },
  }),
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
  actions: {
    getLoginUser({ commit, state }, payload) {
      // TODO: 远程获取
      commit("updateUser", payload);
      // commit("updateUser", { userName: "浩然" });
    },
  },
} as StoreOptions<any>;
