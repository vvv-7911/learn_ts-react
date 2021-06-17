import { Map } from "immutable";
import {
  CHANGE_TOP_BNNAER,
  HOT_RECOMMEND,
  NEW_ALBUM,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_UP_RANKING
} from "./constants";
import { ModifyAction } from './actionCreators'


const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  newRanking: {},
  upRanking: {},
  originRanking: {}
})

export default (state = defaultState, action: any) => {
  switch(action.type) {
    case CHANGE_TOP_BNNAER:
      return state.set("topBanners", action.banners);
    case HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends)
    case NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums)
    case CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking)
    case CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking)
    case CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking)
    default:
      return state;
  }
}

