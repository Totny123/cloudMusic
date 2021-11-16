import axios from "axios";
import store from "@/store";

const service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

service.interceptors.request.use((config) => {
  let cookie = store.getters.profile.cookie;
  if (config.method === "get") {
    config.params = {
      ...config.params,
      cookie: encodeURIComponent(cookie),
      uid: uni.getStorageSync("uid"),
    };
  } else if (config.method === "post") {
  }
  return config;
});

export default service;
