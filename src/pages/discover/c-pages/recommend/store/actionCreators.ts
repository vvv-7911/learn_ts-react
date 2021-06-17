import {
  CHANGE_TOP_BNNAER,
  HOT_RECOMMEND,
  NEW_ALBUM,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_UP_RANKING
} from "./constants";

import { 
  getTopBanner,
  getHotRecommends,
  getNewAlbums,
  getTopList
} from "@/services/recommend";

import { Dispatch } from 'redux'

export interface CHANGE_TOP_BNNAERAction {
  type: CHANGE_TOP_BNNAER,
  banners: Array<{}>
}

export type ModifyAction = CHANGE_TOP_BNNAERAction

const changeBannerAction = (res: any) => ({
  type: CHANGE_TOP_BNNAER,
  banners: res.banners
})

const changeHotRecommendAction = (res: any) => ({
  type: HOT_RECOMMEND,
  hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
  type: NEW_ALBUM,
  newAlbums: res.albums
})

const changeNewRankingAction = (res) => ({
  type: CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeUpRankingAction = (res) => ({
  type: CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeOriginAction = (res) => ({
  type: CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})


export const getBanner = () => {
  return (dispatch: Dispatch) => {
    getTopBanner().then(res => {
      console.log(res)
      dispatch(changeBannerAction(res));
    })
  }
}

export const getHotRecommendAction = (limit: number) => {
  return (dispatch: Dispatch) => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumAction = (limit: number) => {
  return (dispatch: Dispatch) => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx: number) => {
  return (dispatch: Dispatch) => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0: 
          dispatch(changeNewRankingAction(res))
          break;
        case 2:
          dispatch(changeOriginAction(res))
          break;
        case 3:
          dispatch(changeUpRankingAction(res))
          break;
        default:
      }
    })
  }
}