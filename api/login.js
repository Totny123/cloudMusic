import request from "@/utils/request";

export function login(params) {
  return request({
    method: "get",
    url: "/login/cellphone",
    params,
  });
}
