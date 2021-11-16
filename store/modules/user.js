import { login } from "@/api/login";
const state = {
  profile: {},
  isLogin: uni.getStorageSync("isLogin") || false,
};
const mutations = {
  SET_PROFILE: (state, profile) => {
    state.profile = profile;
  },
  SET_IS_LOGIN: (state, boolean) => {
    state.isLogin = boolean;
  },
};
const actions = {
  Login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then((res) => {
        commit("SET_PROFILE", res);
        commit("SET_IS_LOGIN", true);
        uni.setStorageSync("isLogin", true);
        resolve();
      });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
