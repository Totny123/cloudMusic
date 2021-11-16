import request from "@/utils/request";

export function playlist(params) {
  return request({
    method: "get",
    url: "/user/playlist",
    params,
  });
}

export function getPlayListDetail(params) {
  return request({
    method: "get",
    url: "/playlist/detail",
    params,
  });
}

export function getSongDetail(params) {
  return request({
    method: "get",
    url: "/song/detail",
    params,
  });
}
