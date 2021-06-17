import React, { memo } from 'react'

import YTopBanner from './c-cpns/top-banner'
import YHotRecommend from './c-cpns/hot-recommend'
import YNewAlbum from './c-cpns/new-album'
import YRecommendRanking from './c-cpns/recommend-ranking'

import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style";

export default memo(function YRecommend() {
  return (
    <RecommendWraper>
      <YTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <YHotRecommend/>
          <YNewAlbum/>
          <YRecommendRanking/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWraper>
  )
})
