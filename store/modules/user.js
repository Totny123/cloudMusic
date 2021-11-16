import { login } from "@/api/login";
const state = {
  profile: uni.getStorageSync("profile") || {},
  isLogin: uni.getStorageSync("isLogin") || false,
  uid: uni.getStorageSync("uid") || "",
};
const mutations = {
  SET_PROFILE: (state, profile) => {
    state.profile = profile;
  },
  SET_IS_LOGIN: (state, boolean) => {
    state.isLogin = boolean;
  },
  SET_UID: (state, uid) => {
    state.uid = uid;
  },
};
const actions = {
  Login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then((res) => {
        commit("SET_PROFILE", res.data);
        commit("SET_IS_LOGIN", true);
        commit("SET_UID", res.data.profile.userId);
        uni.setStorageSync("isLogin", true);
        uni.setStorageSync("profile", res.data);
        uni.setStorageSync("uid", res.data.profile.userId);
        resolve();
      });
    });
  },
  LogOut({ commit }) {
    return new Promise((resolve, reject) => {
      commit("SET_PROFILE", {});
      commit("SET_IS_LOGIN", false);
      commit("SET_UID", "");
      uni.setStorageSync("isLogin", false);
      uni.setStorageSync("profile", {});
      uni.setStorageSync("uid", "");
      resolve();
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
