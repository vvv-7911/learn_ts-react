export type State = {
  recommend: {
    topBanners?: Array<Banners>,
    hotRecommends?: Array<HotRecommends>,
    newAlbums?: Array<NewAlbum>,
    newRanking?: TopRanking,
    upRanking?: TopRanking,
    originRanking?: TopRanking
  }
}

export type Banners = {
  imageUrl: string,
  typeTitle: string
}

export type HotRecommends = {
  picUrl: string,
  name: string,
  playCount: number,
  copywriter: string,
  id: number
}

export type NewAlbum = {
  id: number,
  picUrl: string,
  name: string,
  artist: {
    name: string
  }
}

export type TopRanking = {
    coverImgUrl: string,
    name: string,
    tracks: Array<{id: number, name: string}>
}