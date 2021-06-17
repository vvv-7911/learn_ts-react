import request from "./axios";

export function getTopBanner() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommends(limit: number) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbums(limit: number) {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}

export function getTopList(idx: number) { // 0 代表新歌榜 2 原创榜 3 飙升榜
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}